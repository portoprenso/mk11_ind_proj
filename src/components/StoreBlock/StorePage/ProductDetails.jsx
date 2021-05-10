import React, { useEffect, useRef } from 'react';
import { useHistory, useParams } from 'react-router';
import './ProductDetails.css'
import { makeStyles } from '@material-ui/core/styles';
import { useProducts } from '../../../contexts/ProductsContext';
import Header from '../../Header/Header';
import { Button, TextareaAutosize } from '@material-ui/core';
import { useAuth } from '../../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';

const ProductDetails = (props) => {
    // console.log(props);
    const history = useHistory()
    const { id } = useParams()
    const { addProductToCart, productDetails, getProductDetails, editProduct } = useProducts()
    const { currentUser } = useAuth()
    let commentRef = useRef(null)
    
    useEffect(() => {
        getProductDetails(id);
    }, [])
    
    const useStyles = makeStyles((theme) => ({
        main_img:{
            alignSelf: 'center',
            width: 375,
            height: 479,
            backgroundImage: `url(${productDetails.imageLarge})`,
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            color: 'chocolate',
            backgroundBlendMode: 'multiply',
            backgroundColor: 'rgba(0, 0, 0, 0.363)',
            textAlign: 'center',
            transition: '0.7s'
        }
        // main__Container:{
        //     display: 'flex',
        //     ['@media(max-width: 1000px)'] : {
        //         display: 'none'
        //   }
        // }
    }));

    function showCommentSection(){
        // console.log(productDetails)
        return(
            productDetails.commentary ? (productDetails.commentary.map((item) => (
                <div id={item.time}>
                    <span>{item.email} ({new Date(item.time).toLocaleString()})</span>
                    <p>{item.text}</p>
                    {currentUser && item.email===currentUser.email ? 
                    (
                        <Button onClick={() => handleDeleteComment(id, item.time)}>Удалить комментарий</Button>
                    ) 
                    :
                    (<></>)
                    }
                    <hr/>
                </div>

                // console.log(item)
            )
            ))
            :
            (
                <>
                </>
            )
        )

    }

    function showButtonText() {
        // console.log(productDetails)
        return(
            <>
            { productDetails.favorites && productDetails.favorites.length > 0 && productDetails.favorites.includes(currentUser.email) ? (<>Удалить из избранного</>) : (<>Добавить в избранное</>)}
            </>
        )
    }

    function showLikesCount() {
        return (<>
        { productDetails.likes && productDetails.likes.length > 0 ? (productDetails.likes.length) : (<></>)}
        </>
        )
    }

    async function handleAddComment(id) {
        let newObj = {
          ...productDetails
        };
        
        let newComment = {
            text: commentRef.current.value,
            email: currentUser.email,
            time: Date.now()
        }

        // (newObj.commentary > 0 ? (
            newObj.commentary.push(newComment)
            // )
        //     :
        //     (
        //     newObj.commentary = [],
        //     newObj.commentary.push(newComment)
        // ))

        await editProduct(id, newObj, history);
        commentRef.current.value = null;
      }

    async function handleAddToFav(id) {
        let newObj = {
            ...productDetails
        };
        if(newObj.favorites.length > 0) {
            if(newObj.favorites.includes(currentUser.email)){
                newObj.favorites = newObj.favorites.filter(elem => elem !== currentUser.email)
            } else {
                newObj.favorites.push(currentUser.email)
            }
        }
        else {
            newObj.favorites.push(currentUser.email)
        }

        await editProduct(id, newObj, history);
        await getProductDetails(id)
      }

    async function handleLike(id) {
        let newObj = {
            ...productDetails
        };
        if(newObj.likes.length > 0) {
            if(newObj.likes.includes(currentUser.email)){
                newObj.likes = newObj.likes.filter(elem => elem !== currentUser.email)
            } else {
                newObj.likes.push(currentUser.email)
            }
        }
        else {
            newObj.likes.push(currentUser.email)
        }

        await editProduct(id, newObj, history);
        await getProductDetails(id)
      }


    async function handleDeleteComment(id, timeStamp) {
        let newObj = {
          ...productDetails
        };
        newObj.commentary = newObj.commentary.filter(item => item.time!==timeStamp)
        // console.log(id);
        // console.log(timeStamp);
        // console.log(newObj.commentary);
        // console.log(newObj);
        await editProduct(id, newObj, history);
        await getProductDetails(id)
      }

    const classes = useStyles()

    return (
        <>
        <Header/>
        <div className="body_details">
            <div className="details" >
            <div className="details__topBackgroung"></div>
            {/* <ul className="one">
                <li>Главная</li>
                <li>Каталог</li>
            </ul> */}
            <h1>{productDetails.title}</h1>
            <div className="main__Container">
                <div className="main_menu_left">

                    <div className={`${classes.main_img} main_img`}>
                    {/* <div className='asd'> */}
                        <p>трейлер и скриншоты</p>
                    </div>
                    <div className="main_info">
                        <p>Жанр <span>{productDetails.category}</span></p>
                        <p>Язык <span>Английский, Русский</span></p>
                        {/* <p>Дата выхода <span>18 июня 2012</span></p> */}
                        <p>Издатель <span>{productDetails.author}</span></p>
                        {/* <p>Особенности <span>Для одного игрока</span></p> */}
                        <p>Цель <span>Достижения</span></p>
                        <p>Регион <span>Россия</span></p>
                    </div>

                </div>
                <div className="mains_menu_right">
                    <div className="mains_price_menu">
                        <div className="mains_info">
                            <ul>
                                <li>Наличие: <span>{
                                productDetails.countInStock>1 ? 
                                ('Много')
                                :
                                ('Ожидается') 
                                }</span></li>
                                <li>Моментальная доставка</li>
                                <li>Лицензионный <span>ключ</span> активации</li>
                                <li>Регион: Россия</li>
                                <li>Накопительная скидка до 10%</li>
                            </ul>
                        </div>
                        <div className="vse">
                            <div className="mains_price">
                                <div className="mains_price_one">
                                <p>-{productDetails.discountPercent}%</p> 
                                </div>
                                <div className="main_price_two">
                                    <del>{productDetails.oldPrice}с</del>
                                    <h2>{productDetails.price}с</h2>
                                </div>
                            </div>
                            <div className="btn_offset">
                               <button 
                               onClick={() => {addProductToCart(productDetails)}} 
                        className="offset">В корзину</button>
                            </div>
                            <div className="two_btn">
                            
                            {currentUser ? (
                            <button onClick={() => handleAddToFav(id)} className="fill">
                                {currentUser ? (
                                    showButtonText()
                                )
                                    :
                                (<>Добавить в избранное</>)
                                }
                                </button>
                                
                            )
                            :
                            (
                            <Link exact to="/login">
                            <button className="fill">
                            Добавить в избранное
                            </button>
                            </Link>)
                        
                        }
                            {/* <button className="fill">Поставить Лайк</button> */}
                            {currentUser ? (
                                <Button onClick={() => handleLike(id)}><FavoriteIcon /> {showLikesCount()} </Button>

                            )
                            :
                            (
                                <Link exact to="/login"><Button><FavoriteIcon /> {showLikesCount()} </Button></Link>
                            )
                            }
                            </div>
                        </div>
                    
                    </div>

                    <div className="nakonecto">
                        <p>Максимальное время ожидания ключа - до 5 часов. <br/>
                        Если вы приобрели продукт с 21.00 до 10.00 по Московскому времени, то ваш заказ будет <br/> укомплектован после 10.00.</p>
                        <h2>Описание</h2>
                        <p>{productDetails.description}</p>
                    </div>
                    <div className="nakonecto2">
                        <h2>Комментарии</h2>
                        {/* { productDetails.commentary.map((item) => (
                            <div>
                                {item.email}
                            </div>
                            // console.log(item)
                        )
                        )} */}
                        {showCommentSection()}
                        <TextareaAutosize
                            className="inp-type__input"
                            ref={commentRef}
                            placeholder="Введите комментарий"
                        />
                        <Button onClick={() => handleAddComment(id)}>Добавить комментарий</Button>
                    </div>
                </div>
            </div>
            

        </div>
        </div>
        </>
    );
};

export default ProductDetails;