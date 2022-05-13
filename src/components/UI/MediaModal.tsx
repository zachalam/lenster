import { MediaSet } from '@generated/types'
import { Dialog, Transition } from '@headlessui/react'
import getIPFSLink from '@lib/getIPFSLink'
import imagekitURL from '@lib/imagekitURL'
import React, { FC, Fragment } from 'react'

interface Props {
  selectedAttachment: MediaSet
  show: boolean
  onClose: () => void
}

const MediaModal: FC<Props> = ({ selectedAttachment, show, onClose }) => {
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog
        as="div"
        className="overflow-y-auto fixed inset-0 z-10"
        onClose={onClose}
      >
        <div className="flex justify-center items-center p-4 min-h-screen text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          />
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom text-left overflow-hidden transform transition-all sm:align-middle w-full max-w-2xl">
              {selectedAttachment.original.mimeType === 'video/mp4' ? (
                <video controls className="object-cover" autoPlay>
                  <source
                    src={getIPFSLink(selectedAttachment.original.url)}
                    type="video/mp4"
                  />
                </video>
              ) : (
                <img
                  className="object-cover"
                  loading="lazy"
                  src={imagekitURL(
                    getIPFSLink(selectedAttachment.original.url),
                    'attachment'
                  )}
                  alt={imagekitURL(
                    getIPFSLink(selectedAttachment.original.url),
                    'attachment'
                  )}
                />
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default MediaModal
