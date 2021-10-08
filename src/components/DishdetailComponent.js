import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



class Dishdetail extends Component {


    renderDish(dish) {
        if (dish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    renderComments(dish) {
        if (dish != null) {
            return(
                <div>
                    <h4>Comments</h4>
                    {dish.comments.map((comment) =>
                            <div>
                                <p>{comment.comment}</p>
                                <p>{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </div>
                    )}
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    render() {
            return(
                <div class="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1" >
                            {this.renderDish(this.props.selecteddish)}
                        </div>
                        <div className="col-12 col-md-5 m-1" >
                            {this.renderComments(this.props.selecteddish)}
                        </div>
                    </div>
                </div>

            );
    }


}


export default Dishdetail;