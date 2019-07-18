import { ReactComponent as ValidatorsImage } from '../../assets/svg/active-validators.svg';
import { ReactComponent as StorageImage } from '../../assets/svg/storage.svg';
import { ReactComponent as MemberImage } from '../../assets/svg/council-member.svg';
import { ReactComponent as payoutImage } from '../../assets/svg/participation-payout.svg';
import { ReactComponent as blockImage } from '../../assets/svg/block-platform-content-files.svg';
import { ReactComponent as bookImage } from '../../assets/svg/platform-content-files.svg';

const roles = {
  active: [
    {
      image: ValidatorsImage,
      title: 'Validator',
      to: '/roles#Validator',
      key: 'validatorsCount',
      hasLabel: false,
      type: 'migration',
    },
    {
      image: MemberImage,
      title: 'Council Member',
      to: '/roles#Council-Member',
      key: 'councilMembersCount',
      hasLabel: false,
      type: 'migration',
    },
    {
      image: StorageImage,
      title: 'Storage Provider',
      to: '/roles#Storage-Provider',
      key: 'storageProviders',
      hasLabel: true,
      type: 'migration',
    },
  ],
};

const analytics = [
  { title: 'Participation Payout', image: payoutImage, value: '$1576' },
  {
    title: 'Active Validators',
    image: ValidatorsImage,
    key: 'validatorsCount',
  },
  { title: 'Platform Content Files', image: bookImage, key: 'mediaFiles' },
  { title: 'Block Height', image: blockImage, key: 'blockHeight' },
];

export { roles, analytics };
