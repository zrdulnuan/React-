import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';




    function RenderDish({dish}) {
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

    function RenderComments({dish}) {
        return(
            <div>
                <h4>Comments</h4>
                {dish.comments.map((comment) =>
                        <div key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        </div>
                )}
            </div>
        );
    }

    const DishDetail = ({selecteddish}) => {
        if (selecteddish != null) {
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1" >
                            <RenderDish dish={selecteddish} />
                        </div>
                        <div className="col-12 col-md-5 m-1" >
                            <RenderComments dish={selecteddish} />
                        </div>
                    </div>
                </div>
    
            );
        }
        else {
            return(
                <div></div>
            );
        }

    }



export default DishDetail;