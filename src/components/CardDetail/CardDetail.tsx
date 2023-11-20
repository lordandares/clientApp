/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { findClientById } from '@/Graphql/Queries'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

export const CardDetail = (props: { itemId: string }) => {
  const { itemId } = props

  const query = findClientById(itemId)
  const { loading, error, data } = useQuery(query)

  if (loading) return <p>Loading...</p>

  if (error) console.log(error)

  if (data)
    return (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Card Client</CardTitle>
          <CardDescription>Id: {data.findClientById.id}</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">First Name</Label>
                <Input disabled id="name" value={data.findClientById.firstName} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Last Name</Label>
                <Input disabled id="name" value={data.findClientById.lastName} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input disabled id="name" value={data.findClientById.email} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Events</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {data.findClientById.events.map(
                      (event: { startDateTime: string; title: string }) => (
                        <SelectItem key={event.startDateTime} value={event.title}>
                          {event.title}
                        </SelectItem>
                      ),
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div>
            <Link to={`/event?itemId=${itemId}`}>
              <Button>Go to Profile</Button>
            </Link>
          </div>
        </CardFooter>
      </Card>
    )
}
