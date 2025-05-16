// backend/seedCards.js
const mongoose = require('mongoose');
const Card = require('./models/Card');

const MONGODB_URI = 'mongodb://localhost:27017/yralvisadb';

const dummyCards = [
  {
    country: "United Arab Emirates",
    price: "6,500",
    visaCount: "53K",
    date: "on 13 May, 04:36 PM",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    category: "all",
    includesTruckIcon: true
  },
  {
    country: "Switzerland",
    price: "3,600",
    visaCount: "30K",
    date: "by 06 Jun, 12:00 AM",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    category: "month",
    stickerVisa: true
  },
  {
    country: "Singapore",
    price: "3,500",
    visaCount: "11K",
    date: "on 28 May, 10:08 PM",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d5?auto=format&fit=crop&w=600&q=80",
    category: "week",
    includesTruckIcon: true
  },
  {
    country: "Belarus",
    statusText: "Visa issued on arrival",
    image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&w=600&q=80",
    category: "instant"
  },
  {
    country: "Macao SAR China",
    statusText: "No Visa Required",
    image: "https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&w=600&q=80",
    category: "instant"
  },
  {
    country: "Botswana",
    statusText: "Coming soon",
    image: "https://images.pexels.com/photos/221436/pexels-photo-221436.jpeg?auto=compress&w=600&q=80",
    category: "instant"
  },
  {
    country: "South Korea",
    price: "4,850",
    visaCount: "15K",
    date: "on 05 Jun, 09:54 PM",
    image: "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=600&q=80",
    category: "month",
    stickerVisa: true,
    includesTruckIcon: true
  },
  {
    country: "Thailand",
    price: "2,500",
    visaCount: "40K",
    date: "by 10 Jun, 11:00 PM",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80",
    category: "week"
  },
  {
    country: "Japan",
    price: "7,200",
    visaCount: "22K",
    date: "on 15 Jun, 08:00 AM",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    category: "all",
    includesTruckIcon: true
  },
  {
    country: "France",
    price: "5,800",
    visaCount: "35K",
    date: "by 20 Jun, 09:00 PM",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
    category: "month"
  },
  {
    country: "Australia",
    price: "6,900",
    visaCount: "18K",
    date: "on 25 Jun, 10:30 AM",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80",
    category: "week"
  },
  {
    country: "Canada",
    price: "8,000",
    visaCount: "28K",
    date: "by 30 Jun, 07:00 PM",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    category: "all"
  },
  {
    country: "Italy",
    price: "5,200",
    visaCount: "19K",
    date: "on 05 Jul, 12:00 PM",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
    category: "month"
  },
  {
    country: "United States",
    price: "9,500",
    visaCount: "50K",
    date: "by 10 Jul, 03:00 PM",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
    category: "all"
  },
  {
    country: "Vietnam",
    price: "2,150",
    visaCount: "27K",
    date: "on 12 Jul, 09:00 AM",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    category: "week"
  },
  {
    country: "Georgia",
    price: "3,300",
    visaCount: "18K",
    date: "on 16 May, 05:34 PM",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80",
    category: "all"
  }
];

async function seed() {
  await mongoose.connect(MONGODB_URI);
  await Card.deleteMany({});
//   await Card.insertMany(dummyCards);
  console.log('Dummy cards inserted!');
  mongoose.disconnect();
}

seed();