var app = angular.module("store", []);
//Gallery Controllers
app.controller("Controller", function($http){
	//Menu and Footer Stuff
	//console.log(Directory.GetFiles("../Portfolio/Oil/Images/Fullsize/"));
	this.products = array;
	this.footers = arrayFooter;
	this.menuLength = "width:" + 100/array.length + "%";
	this.footersLength = "width:" + 100/arrayFooter.length + "%";
	this.hoverOn = function(Identity){
		var Top = 65;
			var Class = Identity;
			Div = "#" + Class + " #divSlides"
			var size = $(Div).children("a").size();
			for(var i = 1; i <= size; i++){
				var Last = Div + " ." + i;
				$(Last).animate({
					top: Top
				},{
					queue: false,
					duration: 250
				});
			Top += 45;
		};
	}
	this.hoverOff = function(Identity){
		var Class = Identity;
			Div = "#" + Class + " #divSlides"
			var size = $(Div).children("a").size();
			for(var i = 1; i <= size; i++){
				var Last = Div + " ." + i;
				$(Last).animate({
					top: 0
				},{
					queue: false,
					duration: 250
				});
			};
	}
	
})
app.controller("Oil", function(){
	settingInits(this, "Rings", oilPara, oilHead, "Portfolio/Oil/", ImagesOil);
	addingFunction(this);
});
app.controller("Acrylic", function(){
	settingInits(this, "Skylee", acryPara, acryHead, "Portfolio/Acrylic/", ImagesAcry);
	addingFunction(this);
});
var settingInits = function(control, name, para, head, dir, ar){
	control.photos = ar;
	control.fileDirectory = dir;
	control.DisplayImage = name + ".jpg";
	control.activeClass = name;
	control.paragraph = para;
	control.heading = head;
}
var addingFunction = function(control){
	control.setImage = function(Class, a){
		this.DisplayImage = 'Images/Fullsize/' + Class;
		this.activeClass = a;
	}
	control.getImage = function(){
		return this.DisplayImage;
	}
	control.getClass = function(){
		return this.activeClass;
	}
	control.nextImage = function(k, Image){
		for(var i = 0; i < this.photos.length; i++){
			if(this.photos[i].Class == Image){
				if(!(i + k >= this.photos.length) && !(i + k < 0)){
					this.setImage(this.photos[i + k].Class + ".jpg", this.photos[i + k].Class);
				}
				else if(i + k >= this.photos.length){
					this.setImage(this.photos[0].Class + ".jpg", this.photos[0].Class);
				}
				else if(i + k < 0){
					this.setImage(this.photos[this.photos.length - 1].Class + ".jpg", this.photos[this.photos.length - 1].Class);
				}
			}
		};
	}
	control.mainShow = function(){
		$(".mainImage").show();
	}
	control.exit = function(){
		$(".mainImage").hide();
	}
	control.galHoverOn = function(id){
		id = "." + id;
		$(id).children('p').fadeIn(500);
	}
	control.galHoverOff = function(id){
		id = "." + id;
		$(id).children('p').fadeOut(100);
	}
}

//Blog Controller
app.controller("Blog", function(){
	
});
//Menu Slides
var array = [{
		header: "Portfolio",
		Class: "Menu1",
		hasLink: false,
		slide: [{
			Class: "1",
			Link: "oil.html",
			option: "Oil"
		},{
			Class: "2",
			Link: "acrylic.html",
			option: "Acrylic"
		},{
			Class: "3",
			Link: "",
			option: "Digital"
		},{
			Class: "4",
			Link: "",
			option: "Mixed Media"
		}]
	},{
		header: "Sketchbook",
		Class: "Menu2",
		hasLink: false,
		slide:[{
			Class: "1",
			Link: "",
			option: "Portraits"
		},{
			Class: "2",
			Link: "",
			option: "Still Lifes"
		},{
			Class: "3",
			Link: "",
			option: "Other"
		}]
	},{
		header: "Home",
		Link: "index.html",
		Class: "Menu3",
		hasLink: true,
	},{
		header: "About",
		Class: "Menu4",
		Link:"",
		hasLink: false,
		slide: [{
			Class: "1",
			Link: "Blog.html",
			option: "Blog"
		},{
			Class: "2",
			Link: "",
			option: "Contact"
		}]
},{
		header: "Commissions",
		Class: "Menu5",
		hasLink: false,
		slide:[{
			Class: "1",
			Link: "",
			option: "Portraits"
		},{
			Class: "2",
			Link: "",
			option: "Still Lifes"
		},{
			Class: "3",
			Link: "",
			option: "Other"
		}]
}];
//Footer
var arrayFooter = [{
	header: "Painting",
	icon: "Images/Pallet.png",
	slides: [{
		option: "Oil"
	},{
		option: "Acylic"
	},{
		option: "Mixed Media"
	}]
},{
	header: "Sketchbook",
	icon: "Images/Camera.png",
	slides: [{
		option: "Portraits"
	},{
		option: "Still Lives"
	},{
		option: "Other"
	}]
},{
	header: "Follow",
	icon: "Images/SocialMedia.png",
	slides: [{
		option: "Instagram"
	},{
		option: "Facebook"
	},{
		option: "Twitter"
	}]
},{
	header: "Contact",
	icon: "Images/Mail.png",
	slides: [{
		option: "email@gmail.com"
	},{
		option: "PO BOX 123 ABC, Place, State, 12345"
	}]
},];
//Images for the Oil Portfolio
var ImagesOil = [{
	Class: "Universe"
},{
	Class: "Oranges"
},{
	Class: "Brush"
},{
	Class: "Rings"
},{
	Class: "Stacked"
},{
	Class: "TreeMan"
},{
	Class: "Baby"
},{
	Class: "BirdCageMe"
},{
	Class: "Castle"
}];
var oilHead = "Oil Gallery";
var oilPara = "Experimenting with oil is something I primerily enjoy doing in my spare time; however," 
				+ " there is a recent growing love for painting still lives."
				+ " Before I tried doing more conceptiual art work such as my planets one but grew more into different such as still lives, portraits and more.";
//Images for the Acrylic Portfolio
var ImagesAcry = [{
	Class: "Skylee",
},{
	Class: "BurntOut",
}];
var acryHead = "Acrylic Gallery";
var acryPara = "I dont use a lot of acrylic simply because I don't find it an easy medium to use or work with; however, I do try and expriment with it occasionally.";