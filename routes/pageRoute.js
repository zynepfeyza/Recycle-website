import express from 'express';
import * as pageController from "../controllers/pageController.js";


const router = express.Router();

router.route('/').get(pageController.getAnasayfaPage);
router.route('/hizmetler').get(pageController.getHizmetlerPage);
router.route('/ayirmaHiz').get(pageController.getAyirmaHizPage);
router.route('/balyalamaHiz').get(pageController.getBalyalamaHizPage);
router.route('/toplamaHiz').get(pageController.getToplamaHizPage);
router.route('/destekOlun').get(pageController.getDestekOlunPage);
router.route('/ssSorular').get(pageController.getssSorularPage);


export default router; 