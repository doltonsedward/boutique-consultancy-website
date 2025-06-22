"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, Save, Eye } from "lucide-react"

export default function CMSPage() {
  const [heroTitle, setHeroTitle] = useState("BOUTIQUE CONSULTANCY")
  const [heroSubtitle, setHeroSubtitle] = useState("Expert fashion advice to elevate your style")
  const [aboutText, setAboutText] = useState(
    "Discover our curated selection of timeless pieces designed to elevate your wardrobe",
  )

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="font-playfair text-3xl font-light text-stone-900 mb-2">Content Management</h1>
        <p className="text-stone-600">Update your website content and images</p>
      </div>

      <Tabs defaultValue="homepage" className="space-y-6">
        <TabsList>
          <TabsTrigger value="homepage">Homepage</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
        </TabsList>

        <TabsContent value="homepage" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Hero Section</CardTitle>
              <CardDescription>Update the main hero section content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="heroTitle">Main Title</Label>
                <Input
                  id="heroTitle"
                  value={heroTitle}
                  onChange={(e) => setHeroTitle(e.target.value)}
                  placeholder="Enter main title"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="heroSubtitle">Subtitle</Label>
                <Input
                  id="heroSubtitle"
                  value={heroSubtitle}
                  onChange={(e) => setHeroSubtitle(e.target.value)}
                  placeholder="Enter subtitle"
                />
              </div>
              <div className="flex gap-2">
                <Button className="bg-stone-800 hover:bg-stone-900">
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
                <Button variant="outline">
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Collection Section</CardTitle>
              <CardDescription>Update the collection description</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="aboutText">Description</Label>
                <Textarea
                  id="aboutText"
                  value={aboutText}
                  onChange={(e) => setAboutText(e.target.value)}
                  placeholder="Enter collection description"
                  rows={4}
                />
              </div>
              <Button className="bg-stone-800 hover:bg-stone-900">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="about" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>About Page Content</CardTitle>
              <CardDescription>Update your about page information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="aboutTitle">About Title</Label>
                <Input id="aboutTitle" placeholder="Enter about page title" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="aboutContent">About Content</Label>
                <Textarea id="aboutContent" placeholder="Enter about page content" rows={8} />
              </div>
              <Button className="bg-stone-800 hover:bg-stone-900">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="images" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Image Management</CardTitle>
              <CardDescription>Upload and manage website images</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label>Hero Image</Label>
                  <div className="mt-2 border-2 border-dashed border-stone-300 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 mx-auto text-stone-400 mb-2" />
                    <p className="text-stone-600">Click to upload or drag and drop</p>
                    <p className="text-sm text-stone-400">PNG, JPG up to 10MB</p>
                  </div>
                </div>

                <div>
                  <Label>Collection Images</Label>
                  <div className="mt-2 grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="border-2 border-dashed border-stone-300 rounded-lg p-4 text-center">
                        <Upload className="w-6 h-6 mx-auto text-stone-400 mb-1" />
                        <p className="text-xs text-stone-600">Upload Image {i}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Button className="bg-stone-800 hover:bg-stone-900">
                <Save className="w-4 h-4 mr-2" />
                Save All Images
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
