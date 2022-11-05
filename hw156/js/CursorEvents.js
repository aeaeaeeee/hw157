AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
    },
  
    handlecomicsListState: function () {
      const id = this.el.getAttribute("id");
      const comicsId = ["flash", "indiana-jones", "sonic", "superman"];
      if (comicsId.includes(id)) {
        const comicContainer = document.querySelector("#comics-container");
        comicContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "#D76B30",
          opacity: 1,
        });
      }
    },
    handleMouseEnterEvents: function () {
      // Mouse Enter Events
      this.el.addEventListener("mouseenter", () => {
        this.handlecomicsListState();
      });
    },
    handleMouseLeaveEvents: function () {
      // Mouse Leave Events
      this.el.addEventListener("mouseleave", ()=>{
        const{selectedItemId}=this.data;
        if(selectedItemId){
          const el = document.querySelector(`#${selectedItemId}`);
          const id = el.getAttribute("id");
          if(id == selectedItemId){
            el.setAttribute("material", {
              color: "#0077CC",
              opacity: 1,
            })
          }
        }
      })
    },
  });
  