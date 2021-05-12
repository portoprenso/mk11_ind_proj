import React, { useEffect, useRef, useState} from 'react';
import { Card, Alert } from 'react-bootstrap'
import { Button, ButtonGroup, Grid, makeStyles, TextareaAutosize, Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import './ProfilePage.css'
import { useRoster } from '../../contexts/RosterContext';
import Header from '../Header/Header';
import { useProducts } from '../../contexts/ProductsContext';
import ProductCard from '../StoreBlock/StorePage/ProductCard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Footer from '../Footer/Footer';


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
    const { productsData, getProductsData, editProduct, productDetails, getProductDetails, addNewProduct } = useProducts()
    const [perc, setPerc] = useState(0)
    const history = useHistory()
    const nameRef = useRef()
    const phraseRef = useRef()
    const descriptionRef = useRef()
    const bigPicRef = useRef()
    const littlePicRef = useRef()
    const videoRef = useRef()

    // addNewProduct refs ↓
    const titleRef = useRef()
    const descriptionForProductRef = useRef()
    const priceRef = useRef()
    const oldPriceRef = useRef()
    const discountPercentPriceRef = useRef()
    const authorRef = useRef()
    const categoryRef = useRef()
    const imageRef = useRef()
    const imageLargeRef = useRef()
    const countInStockRef = useRef()  



    console.log(currentUser)

    useEffect(() => {
      getProductsData(history)
    }, []);


    async function handleAddToFav(id) {
      let { data } = await axios(`http://localhost:8000/products/${id}`)
      console.log(data)

      if(data.favorites.length > 0) {
          if(data.favorites.includes(currentUser.email)){
              data.favorites = data.favorites.filter(elem => elem !== currentUser.email)
          } else {
              data.favorites.push(currentUser.email)
          }
      }
      else {
          data.favorites.push(currentUser.email)
      }

      await editProduct(id, data, history);
      await getProductDetails(id)
      console.log(productDetails.favorites)
    }

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


    async function handleChangeProduct() {
      let newObj = {
        title: titleRef.current.value,
        description: descriptionForProductRef.current.value,
        price: parseInt(priceRef.current.value),
        oldPrice: parseInt(oldPriceRef.current.value),
        discountPercent: parseInt(discountPercentPriceRef.current.value),
        author: authorRef.current.value,
        category: categoryRef.current.value,
        image: imageRef.current.value,
        imageLarge: imageLargeRef.current.value,
        countInStock: parseInt(countInStockRef.current.value)
      }
      await addNewProduct(newObj, history)
      titleRef.current.value = null
      descriptionForProductRef.current.value = null
      priceRef.current.value = null 
      oldPriceRef.current.value = null
      discountPercentPriceRef.current.value = null
      authorRef.current.value = null 
      categoryRef.current.value = null 
      imageRef.current.value = null 
      imageLargeRef.current.value = null 
      countInStockRef.current.value = null

  }

  function calcDiscountpercent(first, second){
      let discount = Math.ceil(100 - ( first / second )*100)
      setPerc(discount)
  }


  

  return (
    <>
    <Header />
    <div style={{dispaly:"flex", paddingTop: 50}}>
      <div className='profile-page__main-container'>
    <Card>
        <Card.Body>
            <h2 className="text-center mb-4">Мой профиль</h2>
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
                  <img className="profilePage__user-image" src={currentUser.photoURL} />
                  <Button className="profilePage__user-name">{currentUser.displayName}</Button>
                  <Button className="profile-page__emailInfo-button" onClick={() => {console.log(productsData)}}>
                      {error && <Alert variant="danger">{error}</Alert>}
                      <strong>Email:</strong> {currentUser.email}
                  </Button>
                <ButtonGroup className="dashBoard__buttongroup">
                      <Button color="primary" variant="contained"><Link to="/update-profile">Ред. профиль</Link></Button>
                      <Button color="primary" variant="contained" className="dashboard__logoutButton" onClick={handleLogout}><Link>Выйти</Link></Button>
                      <Button color="primary" variant="contained"><Link exact to ='/cart'><ShoppingCartIcon/></Link></Button>
                </ButtonGroup>
                </div>
              </div>
        </Card.Body>
    </Card>
    <div className="profile-page__fav-block">
    <h2 style={{alignSelf: 'center', color: '#fda90f', textAlign: 'center'}}>Избранное</h2>
      <div>
        {productsData.map(item => {
        if (item.favorites.includes(currentUser.email)){
          return(
          <div className="fav-block__item">
            <ProductCard xs={12} sm={12}  item={item} key={item.id} />
            <Button className="fav-block__item__removeButton" onClick={() => handleAddToFav(item.id)}>Удалить из избранного</Button>
          </div>
          )
        }

        })}
      </div>
    </div>
    <div className="profilePage__addHero__inputs">
    <div className="profilePage__addHero__inputs__container">
    <h2 style={{alignSelf: 'center', color: '#fda90f', textAlign: 'center'}}>Добавить нового персонажа</h2>
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

        <div className="profile-page__addNewProduct-inputs">
          <h2 style={{alignSelf: 'center', color: '#fda90f', textAlign: 'center'}}>Добавить новый продукт</h2>
        <form className="inp-type" >
      <Grid className="inp-type__inputContainers">
        <Typography variant='h6'>Название</Typography>
        <TextareaAutosize className="inp-type__input" ref={titleRef} placeholder="Название"/>
      </Grid>
      <Grid className="inp-type__inputContainers">
        <Typography variant='h6'>Описание</Typography>
        <TextareaAutosize className="inp-type__input" ref={descriptionForProductRef} placeholder="Описание"/>
      </Grid>
      <Grid className="inp-type__inputContainers">
        <Typography variant='h6'>Цена со скидкой</Typography>
        <TextareaAutosize className="inp-type__input" ref={priceRef} placeholder="Цена со скидкой"/>
      </Grid>
      <Grid className="inp-type__inputContainers">
        <Typography variant='h6'>Цена без скидки</Typography>
        <TextareaAutosize onChange={() => calcDiscountpercent(priceRef.current.value, oldPriceRef.current.value)} className="inp-type__input" ref={oldPriceRef} placeholder="Цена без скидки"/>
      </Grid>
      <Grid className="inp-type__inputContainers">
        <Typography variant='h6'>Процент скидки</Typography>
        <TextareaAutosize className="inp-type__input" ref={discountPercentPriceRef} value={perc} placeholder="Процент скидки"/>
      </Grid>
      <Grid className="inp-type__inputContainers">
        <Typography variant='h6'>Издатель</Typography>
        <TextareaAutosize className="inp-type__input" ref={authorRef} placeholder="Издатель"/>
      </Grid>
      <Grid className="inp-type__inputContainers">
        <Typography variant='h6'>Жанр</Typography>
        <TextareaAutosize className="inp-type__input" ref={categoryRef} placeholder="Жанр"/>
      </Grid>
      <Grid className="inp-type__inputContainers">
        <Typography variant='h6'>Маленькое изображение</Typography>
        <TextareaAutosize className="inp-type__input" ref={imageRef} placeholder="Маленькое изображение"/>
      </Grid>
      <Grid className="inp-type__inputContainers">
        <Typography variant='h6'>Большое изображение</Typography>
        <TextareaAutosize className="inp-type__input" ref={imageLargeRef} placeholder="Большое изображение"/>
      </Grid>
      <Grid className="inp-type__inputContainers">
        <Typography variant='h6'>Количество в наличии</Typography>
        <TextareaAutosize className="inp-type__input" ref={countInStockRef} placeholder="Количество в наличии"/>
      </Grid>
      <Button onClick={() => handleChangeProduct()} color="primary" variant="contained">Добавить новый товар</Button>
    </form>
        </div>
    </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};
export default ProfilePage;