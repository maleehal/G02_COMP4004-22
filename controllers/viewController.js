const ServiceProvider = require("../models/service-provider")
const Booking = require("../models/booking")

const displayProviderProfile = async (req,res) =>{
    console.log("hj")
    const {id} = req.params
    const provider = await ServiceProvider.findOne({_id:id})
    res.render("service_provider", {
        provider:provider
    });
}

const displaySearchPage = async (req,res) =>{
   res.render("search")}

const displayBookingPage = async (req,res) =>{
    res.render("booking")
}

const displayHomePage = async (req,res) =>{
    res.render("home")
}

const displayCustomerSchedulePage = async (req,res) =>{
   res.render("customer_schedule")
}

const updateProviderDetails = async (req,res)=>{
    const {descriptionData,aboutData} = req.body
    const {id} = req.params
    const Updateprovider = await ServiceProvider.findByIdAndUpdate(id,{description:descriptionData, about:aboutData},{runValidators:true})
};

const displayProviderSchedule = async (req,res)=>{
    res.render("service_provider_schedule")
};

module.exports = {displayProviderProfile, updateProviderDetails, displayProviderSchedule ,displayBookingPage ,displaySearchPage , displayCustomerSchedulePage,displayHomePage}