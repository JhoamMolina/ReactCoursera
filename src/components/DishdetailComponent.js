import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish){
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

    renderComment(comments){
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


    render() {
        const dish = this.props.dish
        if(dish == null) {
            return(<div></div>)
        }

        const dishItem = this.renderDish(dish)
        const dishComment = this.renderComment(dish.comments)
        return (
            <div className="container">
            <div className="row">
                {dishItem}
                {dishComment}
            </div>
            </div>
        )
        

    }
}

export default DishDetail;