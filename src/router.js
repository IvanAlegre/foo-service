const express = require('express');
const router = express.Router(); // eslint-disable-line new-cap
const bodyParser = require('body-parser');
const event = require('./controllers/event');

const bodyParserUrlEnc = bodyParser.text({ type: () => true });

const publicPrefix = '/public';

router.get(`${publicPrefix}/foo`, event.get);
router.post(`${publicPrefix}/foo`, bodyParserUrlEnc, event.post);

module.exports = router;
