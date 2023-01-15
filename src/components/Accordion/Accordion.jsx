import './Accordion.scss'
import {Reorder} from 'framer-motion'

const Accordion = ({allInfo, children, titleOfAccordion, useClick}) =>{

    function changeStateOfAccordionContent(id){

        if (useClick===true){
        
          let elem = document.querySelector(`#collapse-${id}`)
                
          if (elem.classList.value==='accordion-collapse collapse show')
            elem.classList.value='accordion-collapse collapse'
          else
            elem.classList.value+=' show'
          
        }
    
    }

    return(
        <div className="accordion">
        
        <Reorder.Group as='ul' axis='y' values={allInfo&&allInfo} onReorder={()=>{}}>

        {allInfo&&allInfo.map((e,i)=>
        <Reorder.Item value={e} whileDrag={{
          scale: 1.1,
        }}>

            <div key={e.id} className="accordion-item mb-2" style={{width:'90%'}}> 

            <h2 className="accordion-header"  id={e.id}>
              <button onClick={e=>
                changeStateOfAccordionContent(e.id)
                } style={{width: '100%'}} className="accordion-button"  data-bs-toggle="collapse">
                {titleOfAccordion ? titleOfAccordion : e.name}
                 
              </button>
            </h2>

            <div id={`collapse-${e.id}`} className="accordion-collapse collapse" aria-labelledby={`heading-${e.id}`} >
              <div className="accordion-body" style={{overflowY: 'scroll', height:'25rem', marginBottom: '5px'}}>
                { children ? children : <strong>{e.name}</strong>}
              </div>
            </div>

          </div>

          </Reorder.Item>)}

        </Reorder.Group>

        </div>
     )
}
export default Accordion