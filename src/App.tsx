import Alert from './components/Alert';
import { Ban,CheckCheck,Construction,Info,TriangleAlert } from 'lucide-react';
import './App.css'


function App() {

  return (
    <>
      <div>
         <Alert type={"alert-error"} icon={<Ban size={20}/>} 
         title={"Something went wrong!"}>

          <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing
               elit. Maxime dolor voluptates voluptatum
                voluptatem {" "} <a href="/">visit this site</a>
               distinctio neque molestiae ipsam alias magni ab.
          </p>
         </Alert>
           
        

        <Alert type={"alert-success"} icon={<CheckCheck  size={20}/>} 
         title={"Done Successfully!"} 
         description='Lorem ipsum dolor sit amet consectetur 
         adipisicing elit. Quam sunt unde ut veniam obcaecati
          tempora dolorum deserunt sint? Ipsam, ducimus!'
          />

        <Alert type={"alert-default"} icon={<Construction  size={20}/>} 
         title={"Default "} 
         description='Lorem ipsum dolor sit amet consectetur 
         adipisicing elit. Quam sunt unde ut veniam obcaecati
          tempora dolorum deserunt sint? Ipsam, ducimus!'
          />

       <Alert type={"alert-info"} icon={<Info   size={20}/>} 
         title={"Info "} 
         description='Lorem ipsum dolor sit amet consectetur 
         adipisicing elit. Quam sunt unde ut veniam obcaecati
          tempora dolorum deserunt sint? Ipsam, ducimus!'
          />

       <Alert type={"alert-warning"} icon={<TriangleAlert    size={20}/>} 
         title={"Warning "} 
         description='Lorem ipsum dolor sit amet consectetur 
         adipisicing elit. Quam sunt unde ut veniam obcaecati
          tempora dolorum deserunt sint? Ipsam, ducimus!'
          />
      </div>
      
    </>
  
  )
}

export default App
