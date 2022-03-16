const   animItems=document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    function animOnscroll(params){
        for(let index=0; index<animItems.length; index++){
            const animItems = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if(animItemHeight > window.innerHeight){
                let animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYoffset > animItemOffset - animItemPoint)&& pageYoffset <(animItemOffset + animItemHeight)){
                animItem.classList.add('_active');
            }
            else{
                animItem.classList.remove('_active');
            }
        }
    }
    function offset (el) {
        const rect = el.getBoundingClientRect (),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return{top: rect.top + scrollTop, left: rect.left + scrollLeft}
        }

        setTimeout(() =>{
            animOnscroll();
        },300);
        animOnscroll();
}