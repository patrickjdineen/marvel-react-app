import reaact from 'react';
import {useGetData} from '../../CustomHooks';
import {useForm} from 'react-hook-form';
import {useLocation} from 'react-router-dom';
import {serverCalls} from '../../api';
import {Container, Button} from 'react-bootstrap';

//Page for updating heros.
//gathers location from the previous clickthrough using history to bind the update of a hero to the ID selected from the herospage.
//uses reactform to handle date to fill

export const UpdateHero = () =>{
    const location= useLocation();
    const {register, handleSubmit}= useForm();
    console.log(location)
    
    const onSubmit = (data) =>{
    console.log(data)
    serverCalls.update(location.state.hero_id, data)
    }
    
    return(
        <Container>
        <h1 className="page-title">Update Your Heroes Attributes</h1>
        <form onSubmit = {handleSubmit(onSubmit)}>
        <label htmlFor="hero_name">Hero's Name</label>
            <input type="text" name="hero_name" id="hero_name" placeholder="What is your Hero's name?" ref={ register }/>

            <label htmlFor="description">Hero Model</label>
            <input type="text" name="description" id="description" placeholder="Describe your Hero" ref={ register }/>

            <label htmlFor="price"># of Comics Appeared</label>
            <input type="text" name="comics_appeared" id="comics_appeared" placeholder="# of Comics appeared" ref={ register }/>
            
            <label htmlFor="super_power">Super Powers</label>
            <input type="text" name="super_power" id="super_power" placeholder="Super Powers" ref={ register }/>

            <Button variant="secondary" type="submit">Update Hero</Button>
            
            </form>
    </Container>
    )
}