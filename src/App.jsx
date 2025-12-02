import { useState, useRef } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'
import { Badge } from './components/ui/badge'
import { Separator } from './components/ui/separator'
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react'
import dd360Logo from './assets/dd360-logo.jpg'
import heroImage from './assets/hero-image.png'
import appScreens from './assets/app-screens.jpg'
import adhesivePatch from './assets/adhesive-patch.jpg'
import deerCrossingSign from './assets/deer-crossing-sign.jpg'

function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [videoProgress, setVideoProgress] = useState(0)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef(null)

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100
      setVideoProgress(progress)
    }
  }

  const handleVideoEnded = () => {
    setIsVideoPlaying(false)
    setVideoProgress(0)
  }

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen()
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen()
      }
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

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
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-800">Download DD360 App</h2>
                <div className="grid grid-cols-2 gap-4 max-w-xl">
                  <a href="#" className="transform hover:scale-105 transition-transform duration-200" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/google-play-badge.png"
                      alt="Get it on Google Play"
                      className="w-full h-auto"
                    />
                  </a>
                  <a href="#" className="transform hover:scale-105 transition-transform duration-200" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/app-store-badge.png"
                      alt="Download on the App Store"
                      className="w-full h-auto"
                    />
                  </a>
                  <a href="#" className="transform hover:scale-105 transition-transform duration-200" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/amazon-appstore-badge.png"
                      alt="Available at Amazon Appstore"
                      className="w-full h-auto"
                    />
                  </a>
                  <a href="#" className="transform hover:scale-105 transition-transform duration-200" target="_blank" rel="noopener noreferrer">
                    <img
                      src="/huawei-appgallery-badge.png"
                      alt="Explore it on AppGallery"
                      className="w-full h-auto"
                    />
                  </a>
                </div>
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

      {/* Video Player Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Watch DD360 in Action</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how our Deer Deterrent 360 system protects drivers and wildlife through advanced technology and real-time alerts.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-primary/5 rounded-lg shadow-lg overflow-hidden border-2 border-accent/20">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative">
                {/* Video element */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover absolute inset-0"
                  muted={isMuted}
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={handleVideoEnded}
                  onClick={handlePlayPause}
                >
                  <source src="/1000012784.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Play/Pause button overlay - shown when not playing */}
                {!isVideoPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center cursor-pointer" onClick={handlePlayPause}>
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto shadow-lg hover:bg-accent/80 transition-colors">
                        <Play className="w-8 h-8 text-accent-foreground ml-1" fill="currentColor" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-primary">Watch Demo</h3>
                        <p className="text-muted-foreground">See DD360 in action</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Video Controls */}
              <div className="bg-primary/90 text-primary-foreground px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handlePlayPause}
                    className="w-8 h-8 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors"
                  >
                    {isVideoPlaying ? (
                      <Pause className="w-4 h-4 text-accent-foreground" />
                    ) : (
                      <Play className="w-4 h-4 text-accent-foreground ml-0.5" fill="currentColor" />
                    )}
                  </button>
                  <div className="text-sm">
                    <span className="text-accent">
                      {videoRef.current ? new Date(videoRef.current.currentTime * 1000).toISOString().substr(14, 5) : '00:00'}
                    </span>
                    <span className="mx-1">/</span>
                    <span>
                      {videoRef.current ? new Date(videoRef.current.duration * 1000).toISOString().substr(14, 5) : '00:00'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 flex-1 mx-4">
                  <div className="w-full h-1 bg-primary-foreground/20 rounded-full cursor-pointer">
                    <div
                      className="h-full bg-accent rounded-full transition-all"
                      style={{width: `${videoProgress}%`}}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={toggleMute}
                    className="w-6 h-6 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {isMuted ? (
                      <VolumeX className="w-full h-full" />
                    ) : (
                      <Volume2 className="w-full h-full" />
                    )}
                  </button>
                  <button
                    onClick={toggleFullscreen}
                    className="w-6 h-6 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    <Maximize className="w-full h-full" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Watch our demonstration video to see how DD360 technology works to protect you on the road.
              </p>
            </div>
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
                <Button className="w-full" asChild>
                  <a href="https://buy.stripe.com/00wfZa9MN6tw5Fc7UXes002" target="_blank" rel="noopener noreferrer">
                    Choose Small
                  </a>
                </Button>
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
                <Button className="w-full" asChild>
                  <a href="https://buy.stripe.com/5kQ8wI6AB0584B8grtes001" target="_blank" rel="noopener noreferrer">
                    Choose Medium
                  </a>
                </Button>
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
                <Button className="w-full" asChild>
                  <a href="https://buy.stripe.com/4gM3coe33aJMc3A3EHes000" target="_blank" rel="noopener noreferrer">
                    Choose Large
                  </a>
                </Button>
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
