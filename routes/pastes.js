const express = require('express');
const router = express.Router();
const Paste = require('../models/paste');
const { getCurrentTime } = require('../utils/time');


router.post('/', async (req, res) => {
const { content, ttl_seconds, max_views } = req.body;
if (!content || typeof content !== 'string') {
return res.status(400).json({ error: 'Content is required' });
}
const now = getCurrentTime(req);
const expiresAt = ttl_seconds ? new Date(now + ttl_seconds * 1000) : null;
try {
const paste = await Paste.create({
content,
createdAt: new Date(now),
expiresAt,
maxViews: max_views ?? null,
remainingViews: max_views ?? null
});
return res.status(201).json({
id: paste._id,
url: `${process.env.BASE_URL}/p/${paste._id}`
});
} catch (err) {
return res.status(500).json({ error: 'Server error' });
}
});


router.get('/:id', async (req, res) => {
const { id } = req.params;
const now = getCurrentTime(req);
try {
const paste = await Paste.findById(id);
if (!paste) return res.status(404).json({ error: 'Paste not found' });
if (paste.expiresAt && new Date(now) > paste.expiresAt)
return res.status(404).json({ error: 'Expired' });
if (paste.remainingViews !== null) {
if (paste.remainingViews <= 0) return res.status(404).json({ error: 'View limit reached' });
paste.remainingViews -= 1;
await paste.save();
}
return res.status(200).json({
content: paste.content,
remaining_views: paste.remainingViews ?? null,
expires_at: paste.expiresAt ?? null
});
} catch {
return res.status(500).json({ error: 'Server error' });
}
});


module.exports = router;