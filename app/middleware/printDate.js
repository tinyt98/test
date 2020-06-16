module.exports = (options,app) =>{
    return async function printD(ctx,next){
        console.log(new Date());
        await next();
        
    }
}