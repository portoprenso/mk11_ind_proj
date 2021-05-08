import React, {useContext, useEffect, useRef, useState} from 'react';
import { Card, Alert } from 'react-bootstrap'
import { Button, ButtonGroup, Grid, makeStyles, TextareaAutosize, Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import './ProfilePage.css'
import { useRoster } from '../../contexts/RosterContext';

const useStyles = makeStyles((theme) => ({
  oldOrders__itemContainer: {
      margin: '10px auto',

    }
  }));


const ProfilePage = () => {
    const classes = useStyles()
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const { addNewFighter } = useRoster()
    const history = useHistory()
    const nameRef = useRef()
    const phraseRef = useRef()
    const descriptionRef = useRef()
    const bigPicRef = useRef()
    const littlePicRef = useRef()
    const videoRef = useRef()

    async function handleLogout() {
        setError('')
        try {
            await logout()
            history.push("/")
        } catch(error) {
            console.log(error);
            setError('Ошибка при авторизации')
        }
      }

    async function handleChange() {
        let newObj = {
          name: nameRef.current.value,
          phrase: phraseRef.current.value,
          description: descriptionRef.current.value,
          bigPic: bigPicRef.current.value,
          littlePic: littlePicRef.current.value,
          video: videoRef.current.value
        }
        console.log(newObj)
        await addNewFighter(newObj)
        nameRef.current.value = null
        phraseRef.current.value = null
        descriptionRef.current.value = null 
        bigPicRef.current.value = null
        littlePicRef.current.value = null
        videoRef.current.value = null 
    }


    async function getOldOrders() {
      // console.log('asd')
      let { data } = await axios(`http://localhost:8000/dbUsers`)
      console.log(data);
      let filteredOrders = []
      console.log(currentUser.email)
      data.forEach(element => {
        console.log(element.mail)
        if(currentUser.email == element.mail){
          console.log(element);
          filteredOrders.push(element.orders)
        }
      });
    //   setOldOrders(filteredOrders)
      // console.log(filteredOrders);
    }
  

  return (
    <div style={{dispaly:"flex"}}>
      <div className='fff'>
    <Card>
        <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            <div className="card-container">
      <div className="card-content">
      <div className="image-container">
        <h3 className="profile"></h3>
        {/* <img className="img-pro" src={Pro} alt=""/> */}
      </div>
      <div className="card-title">
        <h3></h3>
      </div>
      <div className="card-body">
        {/* <p>{body}</p> */}
      </div>

      </div>
      <div className="btn">
        <Button>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong> {currentUser.email}
        </Button>
       
    </div>
      </div>
      <ButtonGroup className="dashBoard__buttongroup">
            <Button color="primary" variant="contained"><Link to="/update-profile">Ред. профиль</Link></Button>
            <Button color="primary" variant="contained" className="dashboard__logoutButton" onClick={handleLogout}><Link>Выйти</Link></Button>
      </ButtonGroup>
        </Card.Body>
    </Card>
    <div className="profilePage__addHero__inputs">
    <form className="inp-type" >
      <Grid className="inp-type__inputContainers">
        <Typography variant='h6'>Name</Typography>
        <TextareaAutosize className="inp-type__input" ref={nameRef} placeholder="Имя персонажа"/>
      </Grid>
      <Grid className="inp-type__inputContainers">
        <Typography variant='h6'>Phrase</Typography>
        <TextareaAutosize className="inp-type__input" ref={phraseRef} placeholder="Коронное слово"/>
      </Grid>
      <Grid className="inp-type__inputContainers">
        <Typography variant='h6'>Description</Typography>
        <TextareaAutosize className="inp-type__input" ref={descriptionRef} placeholder="Описание персоанаж"/>
      </Grid>
      <Grid className="inp-type__inputContainers">
        <Typography variant='h6'>BigPic</Typography>
        <TextareaAutosize className="inp-type__input" ref={bigPicRef} placeholder="Большое изображение для именной страницы"/>
      </Grid>
      <Grid className="inp-type__inputContainers">
        <Typography variant='h6'>LittlePic</Typography>
        <TextareaAutosize className="inp-type__input" ref={littlePicRef} placeholder="Маленькое изображение для ростера"/>
      </Grid>
      <Grid className="inp-type__inputContainers">
        <Typography variant='h6'>Video URL</Typography>
        <TextareaAutosize className="inp-type__input" ref={videoRef} placeholder="URL видео-ролика"/>
      </Grid>
      <Button className="profilePage__button" onClick={() => handleChange()} color="primary" variant="contained">Добавить нового персонажа</Button>
    </form>
    </div>
    </div>
        <div>
          {/* {oldOrders.length > 0 ? 
          
          (
            oldOrders[0].map(item => {
              console.log(oldOrders)
              // console.log(item);
            return(
            <Grid className={classes.oldOrders__itemContainer}>
                  <div>
                    <table>
                        <tbody>
                            {item.products.map(elem => (
                                    <tr key={elem.item.id}>
                                    <div className="img">
                                        <img src={elem.item.image}/>
                                    </div>
                                    <li>Название: <strong><span>{elem.item.title}</span></strong></li>
                                    <li>Цена: <strong><span>{elem.item.price}</span></strong></li>
                                    <li>Старая цена: <strong><span>{elem.item.oldPrice}</span></strong></li>
                                    <li>Скидка: <strong><span>{elem.item.discountPercent}</span></strong></li>
                                    <li>Количество: <strong>{elem.count}</strong></li>
                                    <li>Предварительный итог: <span><strong>{elem.subPrice}</strong></span></li>
                                    <hr />
                                </tr>
                            ))}
                            <li>Общий итог: <span><strong>{item.totalPrice}</strong></span></li>
                            <li>Комментарий: <span><strong>{item.comment}</strong></span></li>
                        </tbody>
                    </table>
                </div>
            </Grid>
            )
          })

          )
          :
          ('Старых заказов нет')
        } */}
        </div>
    </div>
  );
};
export default ProfilePage;