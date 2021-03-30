import React,{Component} from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
// import interactionPlugin from "@fullcalendar/interaction";
import "../App.css";
import "../components/SidebarData.css"



export default class Calendar extends Component {
    
    render() {
      return (
        <FullCalendar
          plugins={[ dayGridPlugin ]}
         
          events={[
            { title: 'event 1', date: '2021-02-17' },
            { title: 'event 2', date: '2021-02-18' }
          ]}
        />
      )
    }
  }

