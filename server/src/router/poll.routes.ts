import { Router } from "express";

import * as pollController from '../controller/poll.controler'

import validPoll from '../middleware/validation/poll/validpoll'
import auth from '../middleware/token/auth'

const router = Router()

router.get('/allpolls', pollController.allPolls)
router.get('/polls', auth, pollController.polls)
router.get('/polls/:id', auth, pollController.getPoll)

router.post('/createpoll', auth, validPoll, pollController.createPoll)

router.delete('/removepoll/:id', auth, pollController.removePoll)

router.put('/updatepoll/:id', auth, pollController.updatePoll)
router.patch('/chooseoptionone/:id', auth, pollController.chooseOptionOne)

export default router