import TruckIcon from "../assets/img/truck.svg";
import MoneyIcon from "../assets/img/money.svg";
import LockIcon from "../assets/img/lock.svg";
import PhoneIcon from "../assets/img/phone.svg";

const posts = [
    {
      id: 1,
      title: 'Free Shipping',
      description:
      'Order above $200',
      author: {
        imageUrl:
          TruckIcon
      },
    },
    {
        id: 2,
        title: 'Money-back',
        href: '#',
        description:
          '30 days guarantee',
        author: {
          imageUrl:
            MoneyIcon
        },
      },
      {
        id: 3,
        title: 'Secure payments',
        href: '#',
        description:
          'Secured by Stripe',
        author: {
          imageUrl:
            LockIcon
        },
      },
      {
          id: 4,
          title: '24/7 Support',
          href: '#',
          description:
            'Phone and Email support',
          author: {
            imageUrl:
              PhoneIcon
          },
        },
  ]
  
const IconCards = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 gap-x-8 gap-y-6 lg:gap-y-16 py-10 lg:grid-cols-4 text-left justify-items-center">
      {posts.map((post) => (
        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between bg-gray-100 px-5 py-10 rounded-xl w-full">
          <div className="flex items-center gap-x-4">
            <img alt="" src={post.author.imageUrl} className="size-10 rounded-full bg-gray-50" />
          </div>
          <div>
            <h3 className="mt-3 text-lg/6 font-semibold text-gray-900">
              {post.title}
            </h3>
            <p className="mt-2 line-clamp-3 text-sm/6 text-gray-600">
              {post.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}

export default IconCards;