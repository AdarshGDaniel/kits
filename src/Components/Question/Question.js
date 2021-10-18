import React from 'react'
import { Card } from 'react-bootstrap'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

export default function Question(props) {
    return (
        <div>
            <Card style={{ width: '100%', marginTop: '30px' }}>
            <Card.Body>
                <Card.Title style={{color: 'red'}}>{props.Title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.Subtitle}</Card.Subtitle>
                <Card.Text>
                {props.text}
                </Card.Text>
                <FormControl component="fieldset">
                <RadioGroup
                    aria-label="gender"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="option1" control={<Radio />} label={props.op1} />
                    <FormControlLabel value="option2" control={<Radio />} label={props.op2} />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
                </FormControl>
            </Card.Body>
            </Card>
        </div>
    )
}
