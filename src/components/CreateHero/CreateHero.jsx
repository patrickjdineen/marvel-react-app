import reaact from 'react';
import {useForm} from 'react-hook-form';
import {serverCalls} from '../../api';
import {Container, Button} from 'react-bootstrap';


export const CreateHero = () =>{

    const {register, handleSubmit}= useForm();
    
    const onSubmit = (data) =>{
        console.log(data)
        serverCalls.create(data)
    }
    
    return(
        <Container>
        <h1>Create Your New Hero</h1>
        <form onSubmit = {handleSubmit(onSubmit)}>
            <label htmlFor="hero_name">Hero's Name</label>
            <input type="text" name="hero_name" id="hero_name" placeholder="What is your Hero's name?" ref={ register }/>

            <label htmlFor="description">Hero Model</label>
            <input type="text" name="description" id="description" placeholder="Describe your Hero" ref={ register }/>

            <label htmlFor="price"># of Comics Appeared</label>
            <input type="text" name="comics_appeared" id="comics_appeared" placeholder="# of Comics appeared" ref={ register }/>
            
            <label htmlFor="super_power">Super Powers</label>
            <input type="text" name="super_power" id="super_power" placeholder="Super Powers" ref={ register }/>

            <Button variant="secondary" type="submit">Create Hero</Button>
            
            </form>
    </Container>
    )
}