import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

    function RenderDish({dish}){
        if(dish != null){
            return(
                <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                    
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
               
            )
        }
        else {
            return(
            <div></div>
                )
    }
}

    function RenderComment({comments}){
        if(comments == null){
            return(
                <div></div>)
        }
        const comment = comments.map(comment => {
            return(
                <li key={comment.id} className="list-unstyled">
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US',{
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                    }).format(new Date(Date.parse(comment.date)))}
                    </p> 
                </li>
            )
        })
     
        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {comment}

            </div>
        )

}

    const DishDetail = (props) => { 
        if(props.dish == null) {
            return(<div></div>)
        }
        return (
            <div className="container">
            <div className="row">
                <RenderDish dish={props.dish} />
                <RenderComment comments={props.dish.comments} />
            </div>
            </div>
        )
        

}

export default DishDetail;