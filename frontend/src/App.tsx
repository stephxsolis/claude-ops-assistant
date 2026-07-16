
//import './App.css'
//import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


interface Ticket {
  id: number
  title: string
  details: string
  severity: string
  status: string
  created_at: string
  assigned_to: string | null
}

interface Analysis {
  analysis: string
}

function App() {

  const [ticketTitle, setTicketTitle] = useState ("") //ticketTitle is current value & setTicketTitle value updates
  const [ticketDetails, setTicketDetails] = useState ("")

  const [analyses, setAnalyses] = useState<Record<number, Analysis>>({})
 
  const handleSubmit = async () => {
    //console.log("Title:", ticketTitle)
    //console.log("Details:", ticketDetails)
    if (!ticketTitle.trim() || ! ticketDetails.trim()) {
      alert("Please fill out all fields.")
      return
  
    }
    try {
    

    const response = await fetch("http://127.0.0.1:8000/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: ticketTitle,
        details: ticketDetails,
        severity: severity
      })
    })
  
  
    
    const data = await response.json()

    console.log(data)

    await getTickets()


    setTicketTitle("")
    setTicketDetails("")

  } catch (error) {
    console.error("Error submitting ticket:", error)
  }
  }

  const [tickets, setTickets] = useState <Ticket[]> ([])


  const getTickets = async () => {
    try {
    const response = await fetch ("http://127.0.0.1:8000/tickets")
    const data = await response.json()

    setTickets(data)
  }catch(error){
    console.error("Error loading tickets:", error)
  }
  }

  useEffect(() => {
    getTickets()
  }, [])


  const [severity, setSeverity] = useState("Low")
  //const [status, setStatus] = useState("Open")
  const updateTicketStatus = async (id: number, status: string) => {
    try{
      await fetch(`http://127.0.0.1:8000/tickets/${id}/status`,{
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          status
        })
      })
      await getTickets()
    } catch(error){
      console.error("Error updating the ticket:", error)
    }
  }

  const deleteTicket = async (id: number) => {
    try{
      await fetch(`http://127.0.0.1:8000/tickets/${id}`, {
        method: "DELETE"
      })
      await getTickets()
    } catch(error){
      console.error("Error deleting the ticket:", error)
    }
  }

  const assignedTo = async(id: number, assigned: string) => {
    try{
      await fetch(`http://127.0.0.1:8000/tickets/${id}/assign`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          assigned: assigned
        })

      })
      await getTickets()
    } catch(error){
      console.error("Error assigning the ticket:", error)
    }
  }

  const analyzeTicket = async (id: number) => {
    try {
      const response = await fetch (`http://127.0.0.1:8000/tickets/${id}/analyze`,{
        method: "POST"
      }
    ) 
      const data = await response.json()
      setAnalyses(prev =>({
        ...prev,
        [id]: data
      }))


    } catch(error){
      console.error("Error analyzing the ticket:", error)

    }
  }


 
  return (
    <div>
      <h1>
        ClaudeOps 
      </h1> 

      <label> Request Title </label>
      <input id ="ticketTitle"
              type = "text"
              value = {ticketTitle}
              placeholder='Request Title'
              onChange = {(e) => setTicketTitle(e.target.value)} /* onChange means */
              />

      <label> Request Details </label>
      <textarea id = "ticketDetails"
                value = {ticketDetails}
                placeholder = 'Describe the issue'
                onChange = {(e) => setTicketDetails(e.target.value)}
      ></textarea>

<label> Severity </label>
<select value = {severity}
              onChange = {(e) => setSeverity(e.target.value)}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
        <option>Critical</option>
      </select>
{/*
<label> Status </label>
<select value = {status}
                onChange = {(e) => setStatus(e.target.value)}
      >
        <option>Open</option>
        <option>Closed</option>
        <option>In Progress</option>
        <option>On Hold</option>
      </select>
      */}

      <button id = "submitButton"
              onClick={handleSubmit}> 
              Submit 
      </button>


      <div>
      <h2> Requests </h2>
      </div>
      


      {tickets.map((ticket)=> (
        <div key = {ticket.id} className = "ticket-card">
          <h3> {ticket.title}</h3>
          <p> {ticket.details}</p>
          <p> 
            Severity: <strong>{ticket.severity}</strong> 
          </p>
        
          <p> 
            Status: <strong>{ticket.status} </strong>

          </p>
          <p>
            Assigned To: <strong>{ticket.assigned_to}</strong>
          </p>
          <p>
            Created At: <strong>{ticket.created_at}</strong>
          </p>
          <label>Update Status:</label>
          <select value = {ticket.status}
                  onChange = {(e) => 
                  updateTicketStatus(ticket.id, e.target.value)
                  }
>
                  <option>Open</option>
                  <option>In Progress</option>
                  <option>On Hold</option>
                  <option>Closed</option>
                
                  </select>
          
          <label>Assign:</label>  
          <select value = {ticket.assigned_to ?? ""}
                  onChange = {(e)=> assignedTo(ticket.id, e.target.value)}
>
                  <option value="">Unassigned</option>
                  <option value="Stephanie">Stephanie</option>
                  <option value="Angel">Angel</option>  
                  <option value="Nelson">Nelson</option>
                  </select>

          <button onClick={() => deleteTicket(ticket.id)}> Delete </button>
          <button onClick={() => analyzeTicket(ticket.id)}>
            Analyze with Claude
          </button>
          {analyses[ticket.id]&& (
            <div className = "analysis-card">
              <h4> Claude Analysis </h4>
              <pre>
                {analyses[ticket.id].analysis}
              </pre>
              </div>
          )}
          </div>

      ))}

    </div>


  )

}

export default App
