import DefaultLayout from '../layouts/DefaultLayout'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import NotificationCard from '../components/NotificationCard'

const Pocetna = () => {
  return (
    <DefaultLayout pageTitle='Početna'>
      <div className='flex gap-4'>
        <Input type='text' placeholder='Pretraži obavijesti' />
        <Button text='Pretraži' className='flex-1 px-4' />
      </div>
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
    </DefaultLayout>
  )
}

export default Pocetna
