import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Table } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { USER_UPDATE_MYPROFILE_RESET } from '../constants/profileConstants'
import { getMyUserDetails,updateMyUserProfile} from '../actions/profileActions'
function MyProfileScreen({ history }) {

    const [bio, setBio] = useState('')
    const [team, setTeam] = useState('')
    const [rating, setRating] = useState('')
    const [birth_date, setBirth_date] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const usermyDetails = useSelector(state => state.usermyDetails)

    const { error, loading, Myuser } = usermyDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const usermyUpdateProfile = useSelector(state => state.usermyUpdateProfile)
    const {success: successUpdate  } = usermyUpdateProfile



    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        }

        if (!Myuser.team || !Myuser || successUpdate || userInfo._id !== Myuser.id) {
            dispatch({ type: USER_UPDATE_MYPROFILE_RESET })
            dispatch(getMyUserDetails(`profile/${userInfo._id}`))
        } else {
            setTeam(Myuser.team)
            setBio(Myuser.bio)
            setRating(Myuser.rating)
            setBirth_date(Myuser.birth_date)
        }

    }, [dispatch, history, userInfo, Myuser, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateMyUserProfile({
            'id': Myuser.id,
            'user':Myuser.user,
            'team': team,
            'bio': bio,
            'birth_date': birth_date,
            'rating': rating
        }))
        setMessage('')


    }

    return (
        <Row>
            <Col md={4}>
                <h2>{userInfo.name} Detail Profile</h2>

                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>

                    <Form.Group controlId='team'>
                        <Form.Label>Your Team</Form.Label>
                        <Form.Control
                            required
                            type='team'
                            placeholder='Enter your team'
                            value={team}
                            onChange={(e) => setTeam(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='bio'>
                        <Form.Label>Your Bio</Form.Label>
                        <Form.Control
                            required
                            type='bio'
                            placeholder='Enter bio'
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='rating'>
                        <Form.Label>Your rating</Form.Label>
                        <Form.Control
                            required
                            type='rating'
                            placeholder='Your Ream'
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId='birth_date'>
                        <Form.Label>Your birth date</Form.Label>
                        <Form.Control
                            type='birth_date'
                            placeholder='change your birth_date'
                            value={birth_date}
                            onChange={(e) => setBirth_date(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='primary'>
                        Update
                </Button>

                </Form>
            </Col>
        </Row>
    )
}

export default MyProfileScreen
