import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Menu, X, Shield, Smartphone, Car, AlertTriangle, Star, Download } from 'lucide-react'
import deerOnRoad from './assets/deer-on-road.jpg'
import deerCrossingSign from './assets/deer-crossing-sign.jpg'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/10">
      {/* Navigation */}
      <nav className="bg-primary text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold">DEER DETERRENT 360</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-accent transition-colors">Home</a>
              <a href="#packages" className="hover:text-accent transition-colors">Packages</a>
              <a href="#about" className="hover:text-accent transition-colors">About us</a>
              <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-primary-foreground hover:text-accent"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                <a href="#home" className="hover:text-accent transition-colors py-2">Home</a>
                <a href="#packages" className="hover:text-accent transition-colors py-2">Packages</a>
                <a href="#about" className="hover:text-accent transition-colors py-2">About us</a>
                <a href="#contact" className="hover:text-accent transition-colors py-2">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent text-accent-foreground">
                Powered Beyond The Roads
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
                DD360°
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                In The United States Deer-Vehicle Collisions Lead To About 200 
                Human Deaths And $1.1 Billion In Property Damage Every Year. 
                While Some Of Those Incidents Included Bad Endings For Turkeys, 
                Raccoons And Dogs, Most Were Between Bumper And Deer. At The 
                Same Time, A Lot Of Those Wildlife Incursions Did Not Happen In 
                The Middle Of Nowhere, But In Suburban Communities Across The 
                State. Deer Remain A Problem In Areas Where Hunting Is Not 
                Allowed, So These Tend To Be Residential Areas And Places Where 
                Vehicle Strikes Are More Likely. The Biggest Problem Is During 
                The Fall Rut (Mating Season), When Deer Can Suddenly Dart Into 
                Roadways At A Time When Days Are Getting Shorter. For Drivers, 
                It Could Mean Big Trouble As They Commute To And From Work. 
                Deer Versus Car Collisions Cost About $3,000 Per Claim For 
                Repairs And Injuries.
              </p>
              
              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-black text-white hover:bg-gray-800 flex items-center gap-2 px-6 py-3">
                  <Download className="h-5 w-5" />
                  Download on the App Store
                </Button>
                <Button className="bg-black text-white hover:bg-gray-800 flex items-center gap-2 px-6 py-3">
                  <Download className="h-5 w-5" />
                  Get it on Google Play
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={deerOnRoad} 
                alt="Deer on road" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Innovations For The Environment
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-accent mb-2">1.6M</div>
              <div className="text-sm">Car/Deer Accidents Per Year</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">200</div>
              <div className="text-sm">Human Deaths Annually</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">10K</div>
              <div className="text-sm">Human Injuries Annually</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">$3.6B</div>
              <div className="text-sm">Property Damage Per Year</div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <Card className="bg-primary-foreground text-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-accent" />
                  Peak Danger Times
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>The majority of car/deer accidents occur between October and December and between the hours of 6 pm and 9 pm.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-primary-foreground text-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-accent" />
                  Leading Cause
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>The leading cause of accidents, injuries and deaths from car/deer related accidents is when vehicles swerve.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-4">
            DD360 Protection Packages
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose the right protection level for your vehicle. Our advanced DD360 patch sits under the hood of your vehicle to increase the protection range.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <CardTitle className="text-primary">Small Vehicles</CardTitle>
                <CardDescription>Perfect for compact cars and sedans</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-2xl font-bold text-primary">Basic Protection</div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-accent" />
                      Standard detection range
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-accent" />
                      Mobile app integration
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-accent" />
                      Real-time alerts
                    </li>
                  </ul>
                  <Button className="w-full">Choose Small</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-primary">Medium Vehicles</CardTitle>
                <CardDescription>Ideal for SUVs and mid-size vehicles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-2xl font-bold text-primary">Enhanced Protection</div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-accent" />
                      Extended detection range
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-accent" />
                      Advanced mobile app features
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-accent" />
                      Social media alerts
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-accent" />
                      Road reporting analysis
                    </li>
                  </ul>
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Choose Medium</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <CardTitle className="text-primary">Large Vehicles</CardTitle>
                <CardDescription>Best for trucks and large SUVs</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-2xl font-bold text-primary">Maximum Protection</div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-accent" />
                      Maximum detection range
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-accent" />
                      Premium app features
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-accent" />
                      Real-time data analytics
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-accent" />
                      Statistics data tracking
                    </li>
                  </ul>
                  <Button className="w-full">Choose Large</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">About Deer Deterrent 360</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Deer Deterrent 360 is a revolutionary web application designed to protect drivers and wildlife by preventing deer-vehicle collisions. Our advanced technology combines real-time detection, mobile alerts, and community reporting to create a comprehensive safety network.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The DD360 system includes both a mobile application and an advanced hardware patch that can be installed under your vehicle's hood to extend the protection range and effectiveness.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Smartphone className="h-6 w-6 text-accent" />
                  <span className="font-semibold">Mobile App Integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-accent" />
                  <span className="font-semibold">Advanced Hardware Protection</span>
                </div>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-accent" />
                  <span className="font-semibold">Real-Time Alerts & Analytics</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={deerCrossingSign} 
                alt="Deer crossing sign" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="text-left">
                <p className="mb-2">663 N 132nd Street</p>
                <p className="mb-4">Omaha Nebraska 68154</p>
                <p className="text-accent font-semibold">support@deerdeterrent360.com</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Newsletter Signup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-gray-600">Subscribe to our newsletter for latest updates</p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Shield className="h-6 w-6 text-accent" />
            <span className="text-lg font-bold">DEER DETERRENT 360</span>
          </div>
          <p className="text-sm opacity-80">
            Copyright ©2024 Deerdeterrent360. Powered by IQ369DYNAMICS
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

