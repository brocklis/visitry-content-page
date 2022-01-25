import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function Example(props) {
  return (
    <div className="w-full px-4">
      <div className="w-full p-2 mx-auto bg-white rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className={`${props.styling} font-merri text-md bg-green-p flex justify-between w-full px-4 py-4 text-white text-left rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}>
                <span>{props.question}</span>
                <ChevronUpIcon
                  className={`rotate-90${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                {props.answer}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
