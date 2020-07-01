import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const QuoteMachine = (props) => (
    <Card>
        <CardContent>
            <Typography id="text">
                {props.selectedQuote.quote} - <span id="author">{props.selectedQuote.author}</span>
            </Typography>
        </CardContent>    
        <CardActions style={{ justifyContent: 'flex-end' }}>
            <IconButton
                color="primary"
                id="tweet-quote"
                target="_blank"
                href={encodeURI(`https://twitter.com/intent/tweet?text=${props.selectedQuote.quote}&hastags=webdev`)}
                >
                <FontAwesomeIcon icon ={faTwitter} size="md"></FontAwesomeIcon>
            </IconButton>
            <Button style={{ backgroundColor: props.buttonColor, color: 'white' }} disableRipple id="new-quote" size="md" onClick={props.assignNewQuoteIndex}>Next Quote</Button>
        </CardActions>
    </Card>
);

export default QuoteMachine;