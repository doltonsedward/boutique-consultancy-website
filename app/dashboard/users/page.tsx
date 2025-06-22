import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Download, Eye, Edit, Trash2 } from "lucide-react"

// Mock user data
const users = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "+1 234-567-8901",
    status: "Active",
    joinDate: "2024-01-15",
    orders: 3,
  },
  {
    id: 2,
    name: "Emily Davis",
    email: "emily@example.com",
    phone: "+1 234-567-8902",
    status: "Active",
    joinDate: "2024-01-20",
    orders: 1,
  },
  {
    id: 3,
    name: "Jessica Wilson",
    email: "jessica@example.com",
    phone: "+1 234-567-8903",
    status: "Inactive",
    joinDate: "2024-02-01",
    orders: 0,
  },
  {
    id: 4,
    name: "Amanda Brown",
    email: "amanda@example.com",
    phone: "+1 234-567-8904",
    status: "Active",
    joinDate: "2024-02-10",
    orders: 5,
  },
  {
    id: 5,
    name: "Michelle Taylor",
    email: "michelle@example.com",
    phone: "+1 234-567-8905",
    status: "Active",
    joinDate: "2024-02-15",
    orders: 2,
  },
]

export default function UsersPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-playfair text-3xl font-light text-stone-900 mb-2">Users</h1>
          <p className="text-stone-600">Manage registered users and their information</p>
        </div>
        <Button className="bg-stone-800 hover:bg-stone-900">
          <Download className="w-4 h-4 mr-2" />
          Export Users
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>All Users</CardTitle>
              <CardDescription>A list of all registered users</CardDescription>
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400" />
                <Input placeholder="Search users..." className="pl-10 w-64" />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Join Date</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    <Badge variant={user.status === "Active" ? "default" : "secondary"}>{user.status}</Badge>
                  </TableCell>
                  <TableCell>{user.joinDate}</TableCell>
                  <TableCell>{user.orders}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
