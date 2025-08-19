exports.index=(req,res)=>{
    res.send("welcome to the ph.d students api\n");
};

exports.show=(req,res)=>{
    res.send(`showing data for id:${req.params.id}\n`);
};

exports.store=(req,res)=>{
    res.send(`Data received: ${req.body.name}, ${req.body.city}\n`);
};

exports.update=(req,res)=>{
    res.send(`data updated for id:${req.params.id},name:${req.body.name},city:${req.body.city}\n`);
};

exports.delete=(req,res)=>{
    res.send(`data deleted for id:${req.params.id}\n`);
};