/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { Button } from '@/components/ui/button'
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
import { ScrollArea } from '@/components/ui/scroll-area'
import { findClientById } from '@/Graphql/Queries'
import { useQuery } from '@apollo/client'
import { Separator } from '@radix-ui/react-select'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'

export const EventPage = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const itemId = queryParams.get('itemId')
  console.log(itemId)
  const query = findClientById(itemId)
  const { t } = useTranslation()
  const { loading, error, data } = useQuery(query)

  if (loading) return <p>Loading...</p>

  if (error) console.log(error)

  if (data)
    return (
      <div className="bg-slate-50 w-full h-full flex justify-around items-center p-20 space-y-5">
        <div className="W-90 flex flex-col lg:flex-row">
          <div className="W-70 block rounded-lg bg-white text-left border-col dark:bg-neutral-700">
            <Card className="w-[950px]">
              <CardHeader>
                <CardTitle>{t('titleEvent')}</CardTitle>
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
                      <ScrollArea className="h-100 w-400 rounded-md border">
                        <div className="p-4">
                          {data.findClientById.events.map(
                            (event: { startDateTime: string; title: string }) => (
                              <>
                                <div key={event.startDateTime} className="text-sm">
                                  {`${event.title} - ${event.startDateTime}`}
                                </div>
                                <Separator className="my-2" />
                              </>
                            ),
                          )}
                        </div>
                      </ScrollArea>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link to={`/`}>
                  <Button>Back</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    )
}
