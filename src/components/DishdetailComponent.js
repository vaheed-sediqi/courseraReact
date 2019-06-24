import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap';


class DishDetail extends Component {

    constructor(prop){
        super(prop);
        this.state = {
            dateFormat: new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit'
            })
        }
    }
    renderDish(dish) {
        return <Card>
            <CardImg top src={dish.image} alt={dish.name}/>
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>;
    }

    renderComments(comments) {
        if(comments == null) {
            return (<div></div>);
        }
        let body = comments.map((comment) => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {this.state.dateFormat.format(Date.parse(comment.date))}</p>
                </li>
            )
        });
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">{body}</ul>
            </div>
        );
    }

    render() {
        const dish = this.props.dish;

        if (dish == null) {
            return (<div></div>);
        }
        return (
            <div className="row">
                <div className="col-md-5 m-1">
                    {this.renderDish(dish)}
                </div>
                <div className="col-md-5 m-1">
                    {this.renderComments(dish.comments)}
                </div>
            </div>);
    }
}

export default DishDetail;