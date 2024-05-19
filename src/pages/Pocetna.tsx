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
<<<<<<< HEAD
=======
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
      <NotificationCard />
>>>>>>> 549049ed5f87ac2d064c620be99ae8d41620f5fb
    </DefaultLayout>
  )
}

export default Pocetna
