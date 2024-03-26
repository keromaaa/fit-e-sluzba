import Button from './ui/Button'

const NotificationCard = () => {
  return (
    <div className='relative border-2 rounded-md border-neutral-300 bg-neutral-100 p-4 h-36'>
      <Button type='text' text='Otvori' className='absolute right-4' />
      <div className='flex gap-4 items-center'>
        <h3 className='text-lg font-medium'>Obavijest</h3>
        <h4 className='text-sm text-neutral-400'>Prije 2 sata</h4>
      </div>
      <p className='line-clamp-3'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non tempora repellendus nesciunt
        perspiciatis delectus distinctio nulla mollitia perferendis a ipsum, fuga reiciendis, iure
        quia tenetur architecto nobis veritatis quos aspernatur. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Non tempora repellendus nesciunt perspiciatis delectus
        distinctio nulla mollitia perferendis a ipsum, fuga reiciendis, iure quia tenetur architecto
        nobis veritatis quos aspernatur.
      </p>
    </div>
  )
}

export default NotificationCard
