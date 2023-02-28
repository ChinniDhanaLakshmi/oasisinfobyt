import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPizzaById } from "../actions/pizzaActions";
import { useParams } from 'react-router-dom';
import Error from '../components/Error';
import Loading from '../components/Loading';
import Success from '../components/Success';

export default function Editpizza({ pizza }) {
    const { pizzaid } = useParams();
    const dispatch = useDispatch()
    const [name, setname] = useState('');
    const [smallprice, setsmallprice] = useState();
    const [mediumprice, setmediumprice] = useState();
    const [largeprice, setlargeprice] = useState();
    const [image, setimage] = useState('');
    const [description, searchdescription] = useState('');
    const [category, setcategory] = useState('');

    const getpizzabyidstate = useSelector(state => state.getPizzaByIdReducer)
    const { pizzaa, error, loading } = getpizzabyidstate



    useEffect(() => {


        if(pizza)
        {
            if(pizza._id==pizzaid)
            {
                setname(pizza.name),
                searchdescription(pizza.description),
                setcategory(pizza.category),
                setsmallprice(pizza.prices[0]['small']),
                setmediumprice(pizza.prices[0]['medium']),
                setlargeprice(pizza.prices[0]['large']),
                setimage(pizza.image)
            }
            else{
                dispatch(getPizzaById(pizzaid));
            }
        }
        else{
            dispatch(getPizzaById(pizzaid));
        }

    }, [pizza , dispatch]);


    function formHandler(e) {

        e.preventDefault();

        const pizza = {
            name,
            image,
            description,
            category,
            prices: {
                small: smallprice,
                medium: mediumprice,
                large: largeprice
            }
        }

        console.log(pizza);

    }

    return (
        < div >
            <h1>Edit Pizza</h1>
            <h1>Pizza Id = {pizzaid} </h1>



            <div className='text-start'>

                {loading && (<Loading />)}
                {error && (<Error error='something went wrong' />)}


                <form onSubmit={formHandler}>
                    <input className='form-control' type="text" placeholder='name' value={name} onChange={(e) => { setname(e.target.value) }} />
                    <input className='form-control' type="text" placeholder='small varient price' value={smallprice} onChange={(e) => { setsmallprice(e.target.value) }} />
                    <input className='form-control' type="text" placeholder='medium varient price' value={mediumprice} onChange={(e) => { setmediumprice(e.target.value) }} />
                    <input className='form-control' type="text" placeholder='large varient price' value={largeprice} onChange={(e) => { setlargeprice(e.target.value) }} />
                    <input className='form-control' type="text" placeholder='category' value={category} onChange={(e) => { setcategory(e.target.value) }} />
                    <input className='form-control' type="text" placeholder='description' value={description} onChange={(e) => { searchdescription(e.target.value) }} />
                    <input className='form-control' type="text" placeholder='image url' value={image} onChange={(e) => { setimage(e.target.value) }} />
                    <button className='btn mt-3' type='submit'>Add Pizza</button>
                </form>
            </div>
        </div >
    )
}