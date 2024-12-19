import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../components/ui/use-toast';  // Changed path
import { Button } from '../components/ui/button';       // Changed path
import { Input } from '../components/ui/input';         // Changed path
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';  

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://reqres.in/api/users?page=${page}`);
      const data = await response.json();
      setUsers(data.data);
      setTotalPages(data.total_pages);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to fetch users',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://reqres.in/api/users/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setUsers(users.filter(user => user.id !== id));
        toast({
          title: 'Success',
          description: 'User deleted successfully',
        });
      } else {
        throw new Error('Failed to delete user');
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    }
  };

  const filteredUsers = users.filter(user =>
    `${user.first_name} ${user.last_name}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-900">Users</h1>
              <Button 
                variant="outline" 
                onClick={logout}
                className="bg-white text-black border-gray-300 hover:bg-gray-50"
              >
                Logout
              </Button>
            </div>
      
            <Input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md border-gray-300"
            />
      
            <div className="bg-white rounded-lg shadow">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-gray-200">
                    <TableHead className="bg-gray-50">Avatar</TableHead>
                    <TableHead className="bg-gray-50">First Name</TableHead>
                    <TableHead className="bg-gray-50">Last Name</TableHead>
                    <TableHead className="bg-gray-50">Email</TableHead>
                    <TableHead className="bg-gray-50">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8">
                        Loading...
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredUsers.map((user) => (
                      <TableRow key={user.id} className="border-b border-gray-200">
                        <TableCell className="p-4">
                          <img
                            src={user.avatar}
                            alt={`${user.first_name}'s avatar`}
                            className="w-10 h-10 rounded-full"
                          />
                        </TableCell>
                        <TableCell className="p-4">{user.first_name}</TableCell>
                        <TableCell className="p-4">{user.last_name}</TableCell>
                        <TableCell className="p-4">{user.email}</TableCell>
                        <TableCell className="p-4">
                          <div className="space-x-2">
                            <Button
                              variant="outline"
                              onClick={() => navigate(`/edit/${user.id}`)}
                              className="bg-white text-black border-gray-300 hover:bg-gray-50"
                            >
                              Edit
                            </Button>
                            <Button
                              variant="outline"
                              onClick={() => handleDelete(user.id)}
                              className="bg-white text-black border-gray-300 hover:bg-gray-50"
                            >
                              Delete
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
      
            <div className="flex justify-center gap-2 mt-6">
              <Button
                onClick={() => setPage(p => p - 1)}
                disabled={page === 1}
                className="bg-white text-black border-gray-300 hover:bg-gray-50"
              >
                Previous
              </Button>
              <Button
                onClick={() => setPage(p => p + 1)}
                disabled={page === totalPages}
                className="bg-white text-black border-gray-300 hover:bg-gray-50"
              >
                Next
              </Button>
            </div>
          </div>
        );
      };

export default UserList;