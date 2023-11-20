/* eslint-disable react/react-in-jsx-scope */
import { CardDetail } from '@/components/CardDetail/CardDetail'
import ClientList from '@/components/ClientList/ClientList'
import { CardDescription, CardTitle } from '@/components/ui/card'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

type itemIdType = string

export function Home() {
  const [itemId, setItemId] = useState<itemIdType>('')

  const { t } = useTranslation()
  return (
    <>
      <div className="bg-slate-50 w-full h-full flex justify-around items-center p-20 space-y-5">
        <div className="W-90 flex flex-col lg:flex-row">
          <div className="W-70 block rounded-lg bg-white text-left border-col dark:bg-neutral-700">
            <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
              <h2 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                <CardTitle>{t('title')}</CardTitle>
              </h2>
            </div>
            <div className="p-6">
              <h2 className="mb-1 text-l font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                <CardDescription>{t('subtitle')}</CardDescription>
              </h2>
            </div>
            <ClientList setItemIdHandler={setItemId} />
          </div>
          <CardDetail itemId={itemId} />
        </div>
      </div>
    </>
  )
}
