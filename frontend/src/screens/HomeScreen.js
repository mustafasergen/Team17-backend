import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'



function HomeScreen({ history }) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state)
    const { error, loading, page, pages } = productList

    let keyword = history.location.search

    useEffect(() => {

    }, [dispatch, keyword])

    return (
        <div>
            <h1 style= {{position:'absolute', left:800}}>Futbolun Kalbinde Sen de Yer Al</h1>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <Row>

                        </Row>
                        <Paginate page={page} pages={pages} keyword={keyword} />
                    </div>
            }
        </div>
    )
}

export default HomeScreen