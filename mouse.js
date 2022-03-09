AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemId:{default:"", type:'string'}
    },
    init:function(){
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
    },
    handleMouseEnterEvents: function(){
        this.el.addEventListener("mouseenter",(e)=>{
            const id= this.el.getAttribute("id");
            const posterId=[
                "frozen",
                "micky",
                "princess",
                "toy-story"
            ];
            if(posterId.includes(id)){
                const postersContainer= document.querySelector('#posters_container');
                postersContainer.setAttribute("cursor-listener",{
                    selectedItemId:id,
                });
                this.el.setAttribute("material",{color:"#1565c0"});
            }
        });
    },
    handleMouseLeaveEvents: function(){
        this.el.addEventListener("mouseleave",(e)=>{
            const {selectedItemId}= this.data;
            if(selectedItemId){
                const el= document.querySelector(`#${selectedItemId}`);
                const id= el.getAttribute('id');
                if(id == selectedItemId){
                    el.setAttribute("material",{color:"#fff"})
                }
            }
        });
    },
});