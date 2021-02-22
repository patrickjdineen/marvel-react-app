import react, {useState, useEffect } from 'react';
import {serverCalls} from '../../api'
import {Button,Card, Container, CardGroup} from 'react-bootstrap';
import {useGetData} from '../../CustomHooks';
import {useHistory} from 'react-router-dom';
import avengers from '../../assets/images/avengers.jpg'


export const Heroes = () => {
    
    const history = useHistory();

    const routeChange = (id,path) =>{
        history.push({
            pathname:path,
            state:{hero_id:id}
        })
    }

    let {heroData, getData} = useGetData();
    console.log(heroData)

    const deleteHero = (id) =>{
        serverCalls.delete(id);
        getData()
    }

    return(
        <Container>
            <h1 className="page-title">AVENGERS ASSEMBLE </h1>
            <h4>If you have another hero to add to your team, use the button below to add them!</h4>
            <Button variant="secondary" onClick = { () => routeChange("",'create')}>Add a new Hero</Button>
            {heroData.map( (item) =>(
                <div key="item.id">
                    <CardGroup>
                    <Card style={{width: '20rem'}}>
                    <Card.Img variant="top" src={avengers} />
                        <Card.Body>
                            <Card.Title className="page-title">
                                {item.hero_name}
                            </Card.Title>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                            <Card.Text>
                                {item.comics_appeared}
                            </Card.Text>
                            <Card.Text>
                                {item.super_power}
                            </Card.Text>
                            <Button variant="secondary" onClick = { () => routeChange(item.id,'update')}>Update Hero</Button>
                            <Button variant="danger" onClick = {()=> deleteHero(item.id)}>Delete Hero</Button>
                        </Card.Body>
                    </Card>
                    </CardGroup>
                </div>
            ))}
        </Container>
    )
}