import React from 'react'
import "./App.css"
import Pagination from './Pagination';


const App = () => {

    const items = [ "Smartphone", "Laptop", "Tablet", "Smartwatch", "Bluetooth Speaker", "Wireless Earbuds", "Gaming Console", 
        "LED TV", "Digital Camera", "Drone", "Refrigerator", "Microwave Oven", "Washing Machine", "Air Conditioner", 
        "Water Purifier", "Electric Kettle", "Induction Cooktop", "Vacuum Cleaner", "Hair Dryer", "Electric Toothbrush", 
        "Fitness Tracker", "Keyboard", "Gaming Mouse", "Monitor", "Printer", "Router", "Power Bank", "External Hard Drive", 
        "Flash Drive", "Memory Card", "Coffee Maker", "Blender", "Air Fryer", "Electric Iron", "Ceiling Fan", "Table Lamp", 
        "Desk Lamp", "Wall Clock", "Headphones", "Projector", "Smart Bulb", "Electric Scooter", "Air Purifier", 
        "Electric Shaver", "Pressure Cooker", "Rice Cooker", "Toaster", "Dishwasher", "Electric Heater", "Water Heater", 
        "Juicer", "Smart Lock", "Security Camera", "Game Controller", "Smart Doorbell", "Wi-Fi Extender", "Gaming Chair", 
        "Standing Desk", "Office Chair", "USB Hub", "Charger", "Tripod", "Photo Frame", "Portable Fan", "Air Humidifier", 
        "Dehumidifier", "Soundbar", "Streaming Device", "Electric Blanket", "Water Dispenser", "Bread Maker", "Sewing Machine", 
        "Hand Blender", "Deep Freezer", "Kitchen Chimney", "Tabletop Grill", "Electric Skillet", "Portable Air Conditioner", 
        "Heated Towel Rack", "Luggage", "Backpack", "Camping Tent", "Sleeping Bag", "Cooler Box", "Barbecue Grill", "Binoculars", 
        "Power Drill", "Cordless Screwdriver", "Lawn Mower", "Garden Hose", "Sprinkler", "Electric Hedge Trimmer", "Chainsaw", 
        "Tool Kit", "Flashlight", "Solar Light", "Outdoor Camera", "Smart Thermostat", "Wi-Fi Smart Plug", "Fitness Mat", 
        "Dumbbells", "Treadmill", "Exercise Bike", "Rowing Machine", "Yoga Block", "Protein Shaker", "Resistance Bands", 
        "Basketball", "Cricket Bat", "Badminton Racket", "Tennis Racket", "Football", "Helmet", "Goal Net", "Sports Shoes", 
        "Hiking Boots", "Running Watch", "Water Bottle", "Lunch Box", "Travel Mug", "Thermos", "Shower Speaker", "Electric Razor", 
        "Hair Straightener", "Hair Curler", "Makeup Mirror", "Facial Steamer", "Body Massager", "Foot Spa", "Electric Nail File", 
        "Jewelry Box", "Shoe Rack", "Wardrobe Organizer", "Bedside Table", "Bookshelf", "Sofa Set", "Dining Table", "Study Desk", 
        "Carpet", "Curtains", "Bean Bag", "Wall Art", "Room Divider", "Laundry Basket", "Planter", "Composter", "Thermometer", 
        "Oximeter", "Blood Pressure Monitor", "Glucose Meter", "First Aid Kit", "Hand Sanitizer", "Face Mask", "Smart Glasses", 
        "VR Headset", "Action Camera", "Smart Frame", "Digital Whiteboard", "Video Door Phone", "CCTV Kit", "Drone Accessories", 
        "Power Inverter", "Surge Protector", "Battery Charger", "UPS", "Extension Cord", "Cables", "Adapters", "Portable Printer", 
        "3D Printer", "Stylus Pen", "Mouse Pad", "Graphic Tablet", "E-Book Reader", "Gaming Keyboard", "Smart Pen", "White Noise Machine", 
        "Electric Fan", "Car Vacuum", "Dash Cam", "Car Charger", "Car Air Purifier", "Bike Lock", "Electric Bike", "Foldable Bike", 
        "Hoverboard", "Skateboard", "Fishing Rod", "Tent Light", "Gas Stove", "Electric Tandoor", "Microwave Grill", "Cookware Set", 
        "Knife Set", "Chopping Board", "Measuring Cups", "Ice Maker", "Food Processor", "Smart Scale", "Lawn Sprinkler", 
        "Garden Table", "Plant Stand", "Hammock","T-Shirt", "Jeans", "Formal Shirt", "Casual Shirt", "Jacket", "Sweater", "Hoodie", "Blazer", "Suits", "Kurta","Salwar Suit", "Lehenga", "Saree", "Top", "Skirt", "Shorts", "Dungarees", "Leggings", "Track Pants", "Joggers",
        "3D Printer", "Stylus Pen", "Mouse Pad", "Graphic Tablet", "E-Book Reader", "Gaming Keyboard", "Smart Pen", "White Noise Machine", 
        "Sportswear", "Undergarments", "Nightwear", "Raincoat", "Woolen Cap", "Scarf", "Mittens", "Gloves", "Leather Jacket",
        "Winter Coat", "Denim Jacket", "Swimwear", "Bathrobe", "Flip Flops", "Sandals", "Formal Shoes", "Casual Shoes",
        "Boots", "Slippers", "Belts", "Wallet", "Handbag", "Backpack", "Clutch", "Duffel Bag", "Purse", "Sunglasses",
        "Caps", "Beanies", "Watch Straps", "Bracelets", "Necklaces", "Earrings", "Rings", "Anklets", "Hair Accessories","Smart Door Lock", "Digital Thermostat", "Smoke Detector", "Carbon Monoxide Alarm", "Wi-Fi Ceiling Fan",
        "Robot Vacuum Cleaner", "Smart Security Light", "Motion Sensor Lights", "Automatic Curtain Opener",
        "Smart Shower System", "Smart Window Opener", "Electric Garage Door Opener", "Key Finder", "Water Leak Detector",
        "Electric Pest Repeller", "Digital Door Peephole", "Wireless Door Sensor", "Smart Intercom", "Cordless Vacuum",
        "High-Pressure Shower Head", "Soap Dispenser", "Smart Water Tap", "Smart Refrigerator", "Digital Alarm Clock",
        "Wall-Mounted Fan", "Smart Door Viewer", "Temperature Sensor", "Air Quality Monitor", "Portable Air Cooler",
        "Automatic Plant Watering System", "Robot Mop", "Smart Washing Machine", "Video Doorbell", "Smart Coffee Grinder",
        "Electric Dustpan", "Digital Meat Thermometer", "Food Storage Vacuum Sealer", "Waterproof Outdoor Speaker",
        "Adjustable Standing Desk Converter", "Smart Dishwasher", "UV Sterilizer Box", "Egg Boiler", "Popcorn Maker",
        "Kettle Toaster Combo", "Electric Water Jar", "Mini Refrigerator", "Compact Washing Machine", "Portable Heater","Bluetooth Soundbar", "Mini Bluetooth Projector", "Gaming Laptop", "4K Monitor", "Wireless Keyboard",
        "Laptop Cooling Pad", "All-in-One Printer", "Smart LED Strip", "VR Controllers", "Smartphone Gimbal", 
        "Portable SSD", "HDMI Splitter", "Wi-Fi Router", "Network Switch", "Portable Projector", "Gaming Monitor",
        "Noise-Cancelling Headphones", "Over-Ear Headphones", "Smart Ring", "Fitness Smart Band", "Blood Pressure Watch",
        "Digital Photo Frame", "Underwater Camera", "Noise-Cancelling Microphone", "USB Sound Card", "Wireless Charger",
        "Car Battery Charger", "Portable Music Player", "Digital Camcorder", "USB Type-C Hub", "Smart Glasses with AR",
        "Home Theater System", "Dual Dash Camera", "Portable Solar Power Bank", "LED Panel Light", "Smart Video Call Device",
        "Multi-Device Keyboard", "Streaming Microphone", "Wireless Presentation Remote", "Voice Translator Device",
        "Mini Drone with Camera", "Electric Kick Scooter", "Smart Motorbike Helmet", "Portable Gaming Console", "VR Gloves",
        "3D Pens", "Interactive Whiteboard", "Gaming Headset", "Smart Keypad", "Digital Voice Recorder", "Electric Scooter Bike",
        "Wireless Guitar Controller", "Smartphone Photography Lens", "eSports Gaming Chair", "Raspberry Pi Kit", "Smart Scale","Cushions", "Mattress Protector", "Cotton Bedsheet", "Curtain Rods", "Study Chair", "Electric Table Lamp",
        "LED Desk Light", "Modular Shelves", "Foldable Wardrobe", "Shoe Organizer", "Ladder", "Bookshelf Organizer",
        "Bathroom Mirror Cabinet", "Underbed Storage Box", "Storage Bins", "Waterproof Picnic Mat", "Electric Hot Pot",
        "LED Floor Lamp", "Modular Kitchen Drawer", "Portable Desk", "Multipurpose Cabinet", "Shower Caddy", "Hanging Racks",
        "Adjustable Table Stand", "Folding Table", "Electric Food Trolley", "Baby Safety Gate", "Door Draft Stopper",
        "Towel Rack", "Suction Soap Holder", "Drawer Organizer", "Foldable Stool", "Bathroom Storage Organizer", "Yoga Mat Bag", "Portable Gym Kit", "Smart Basketball", "Fitness Hoop", "Foldable Yoga Chair", "Multi-Gym Machine",
        "Electric Muscle Stimulator", "Cycling Gloves", "Bike Helmet", "Smart Bike Tracker", "Travel Organizer Bag",
        "Camping Gear Set", "Portable BBQ Grill", "Compact Travel Iron", "Luggage Tags", "Electric Luggage Scale",
        "Hiking Poles", "Travel Compression Bags", "Convertible Travel Backpack", "Multi-Compartment Duffel", 
        "Smart Passport Holder", "Travel Adapter", "Waterproof Dry Bag", "Anti-Theft Backpack", "Car Roof Box",
        "Portable Travel Fridge", "Foldable Travel Cup", "Portable Travel Blanket", "Electric Heated Travel Mug"];



  return (
    <div>
        <Pagination Pagination items = {items} itemPerPage = {50}/>
    </div>
  )
}

export default App
