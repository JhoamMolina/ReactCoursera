import React from 'react';
import { Media } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent'
import { Fade, Stagger } from 'react-animation-components'



function RenderListLeader({leader, isLoading, errMess}){
           return (
            <div key={leader.id} className="col-12 mt-5">
            <Media tag="li">
               <Media left middle>
                <Media object src={baseUrl + leader.image} alt={leader.name} />
                </Media>
                <Media body className="ml-5">
                <Media heading>{leader.name}</Media>
                <p>{leader.description}</p>
              </Media>
            </Media>
          </div>   
            
    );
}


const RenderLeader = (props) => {
    const list = props.leaders.map((leader) => {
        return (
            <Fade>
            <RenderListLeader   leader={leader} />
            </Fade>
        );
    });
    if (props.isLoading) {
        return(
            <Loading />
        );
    }
    else if(props.errMess){
        return(
            <h4>{props.errMess}</h4>
        )}
    else
    return (
        <div>
        <Stagger in>    
        {list}
        </Stagger>
        </div>
    )
}
 

export default RenderLeader;