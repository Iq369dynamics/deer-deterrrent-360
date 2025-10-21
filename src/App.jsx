import './App.css'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'
import { Badge } from './components/ui/badge'
import { Separator } from './components/ui/separator'
import dd360Logo from './assets/dd360-logo.jpg'
import heroImage from './assets/hero-image.png'
import appScreens from './assets/app-screens.jpg'
import adhesivePatch from './assets/adhesive-patch.jpg'
import deerCrossingSign from './assets/deer-crossing-sign.jpg'

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={dd360Logo} alt="DD360 Logo" className="h-12 w-12 rounded-full" />
            <span className="text-xl font-bold">DEER DETERRENT 360</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-accent transition-colors">Home</a>
            <a href="#packages" className="hover:text-accent transition-colors">Packages</a>
            <a href="#about" className="hover:text-accent transition-colors">About us</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-accent/20 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2 space-y-6">
              <Badge className="bg-accent text-accent-foreground">Powered Beyond The Roads</Badge>
              <h1 className="text-5xl font-bold text-primary">DD360°</h1>
              <p className="text-lg text-muted-foreground">
                In The United States, deer-vehicle collisions are a significant issue. During the fall rut (mating season), 
                deer can suddenly dart into roadways, especially in suburban communities where hunting is not allowed. 
                This poses a considerable risk to drivers, leading to costly repairs and potential injuries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-black text-white hover:bg-gray-800">
                  Download on the App Store
                </Button>
                <Button className="bg-black text-white hover:bg-gray-800">
                  Get it on Google Play
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img src={heroImage} alt="DD360 Road Safety App & Patch" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Global Impact of Deer-Vehicle Collisions</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Collisions between motor vehicles and large animals, predominantly deer, represent a significant global concern 
              for public safety and property damage. DD360 addresses this critical need worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-primary">United States</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-3xl font-bold text-accent">~440</div>
                  <div className="text-sm text-muted-foreground">Human Deaths Annually (2022 est.)</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">1-2 Million</div>
                  <div className="text-sm text-muted-foreground">Crashes Annually</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">1.8 Million+</div>
                  <div className="text-sm text-muted-foreground">Insurance Claims (mid-2023 to mid-2024)</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-primary">Europe</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-3xl font-bold text-accent">~300</div>
                  <div className="text-sm text-muted-foreground">Human Deaths Annually</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">~700</div>
                  <div className="text-sm text-muted-foreground">Injured/Killed in UK (2023 study)</div>
                </div>
                <div className="text-sm text-muted-foreground">Wild boar and roe deer common in Spain</div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-primary">Global Challenge</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  Inconsistent reporting and varied data collection methods make direct global comparisons challenging.
                </div>
                <div className="text-sm text-muted-foreground">
                  Environmental factors, species characteristics, and road design all influence collision frequency.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* App Screens Section */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">See the DD360 App in Action</h2>
          <div className="max-w-4xl mx-auto">
            <img src={appScreens} alt="DD360 App Screens" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-8">Innovations For The Environment</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent">1.6M</div>
                <div className="text-sm">Car/Deer Accidents Per Year</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent">200</div>
                <div className="text-sm">Human Deaths Annually</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent">10K</div>
                <div className="text-sm">Human Injuries Annually</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent">$3.6B</div>
                <div className="text-sm">Property Damage Per Year</div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Card className="bg-primary-foreground text-primary">
              <CardHeader>
                <CardTitle>Peak Danger Times</CardTitle>
              </CardHeader>
              <CardContent>
                <p>The majority of car/deer accidents occur between October and December and between the hours of 6 pm and 9 pm.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-primary-foreground text-primary">
              <CardHeader>
                <CardTitle>Leading Cause</CardTitle>
              </CardHeader>
              <CardContent>
                <p>The leading cause of accidents, injuries and deaths from car/deer related accidents is when vehicles swerve.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">DD360 Protection Packages</h2>
            <p className="text-lg text-muted-foreground">
              Choose the right protection level for your vehicle. Our advanced DD360 patch sits under the hood of your vehicle to increase the protection range.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Small Vehicles</CardTitle>
                <CardDescription>Perfect for compact cars and sedans</CardDescription>
                <div className="text-3xl font-bold text-accent">$45</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• Standard detection range</li>
                  <li>• Mobile app integration</li>
                  <li>• Real-time alerts</li>
                </ul>
                <Button className="w-full">Choose Small</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-accent border-2">
              <CardHeader>
                <CardTitle className="text-primary">Medium Vehicles</CardTitle>
                <CardDescription>Ideal for SUVs and mid-size vehicles</CardDescription>
                <div className="text-3xl font-bold text-accent">$65</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• Extended detection range</li>
                  <li>• Advanced mobile app features</li>
                  <li>• Social media alerts</li>
                  <li>• Road reporting analysis</li>
                </ul>
                <Button className="w-full">Choose Medium</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">Large Vehicles</CardTitle>
                <CardDescription>Best for trucks and large SUVs</CardDescription>
                <div className="text-3xl font-bold text-accent">$85</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• Maximum detection range</li>
                  <li>• Premium app features</li>
                  <li>• Real-time data analytics</li>
                  <li>• Statistics data tracking</li>
                </ul>
                <Button className="w-full">Choose Large</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advanced Patch Section */}
      <section className="py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <img src={adhesivePatch} alt="DD360 Advanced Patch" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-primary">The DD360 Advanced Patch</h2>
              <p className="text-lg text-muted-foreground">
                The advanced DD360 patch sits under the hood of your vehicle to increase the protection range and effectiveness of the Deer Deterrent 360 system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-primary">About Deer Deterrent 360</h2>
              <p className="text-lg text-muted-foreground">
                Deer Deterrent 360 is a revolutionary web application designed to protect drivers and wildlife by preventing deer-vehicle collisions. 
                Our advanced technology combines real-time detection, mobile alerts, and community reporting to create a comprehensive safety network.
              </p>
              <p className="text-lg text-muted-foreground">
                The DD360 system includes both a mobile application and an advanced hardware patch that can be installed under your vehicle's hood to extend the protection range and effectiveness.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <Card className="text-center p-4">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-accent rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-accent-foreground font-bold">📱</span>
                    </div>
                    <h3 className="font-semibold text-primary">Mobile App Integration</h3>
                  </CardContent>
                </Card>
                
                <Card className="text-center p-4">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-accent rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-accent-foreground font-bold">🛡️</span>
                    </div>
                    <h3 className="font-semibold text-primary">Advanced Hardware Protection</h3>
                  </CardContent>
                </Card>
                
                <Card className="text-center p-4">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-accent rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-accent-foreground font-bold">📊</span>
                    </div>
                    <h3 className="font-semibold text-primary">Real-Time Alerts & Analytics</h3>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img src={deerCrossingSign} alt="Deer crossing sign" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Get In Touch</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold">663 N 132nd Street</p>
                  <p>Omaha Nebraska 68154</p>
                </div>
                <div>
                  <p className="text-accent font-semibold">support@deerdeterrent360.com</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-primary">Newsletter Signup</CardTitle>
                <CardDescription>Subscribe to our newsletter for latest updates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Enter your email" />
                <Button className="w-full">Subscribe</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src={dd360Logo} alt="DD360 Logo" className="h-8 w-8 rounded-full" />
              <span className="font-bold">DEER DETERRENT 360</span>
            </div>
            <div className="text-sm text-center md:text-right">
              <p>Copyright ©2024 Deerdeterrent360. Powered by IQ360DYNAMICS</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
