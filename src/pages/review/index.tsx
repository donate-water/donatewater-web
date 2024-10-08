﻿import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAuth } from 'react-oidc-context';

import type { IIASAFieldSurveyDtosReviewDto } from '@/api/autoGenerated/schemas';
import { IIASAFieldSurveyEnumReviewStatus } from '@/api/autoGenerated/schemas';
import { useGetSurveyReview } from '@/api/autoGenerated/survey-review/survey-review';
import PageNavigation from '@/components/paginate';
import ReviewListTable from '@/components/reviewListTable';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import { getBackgroundImage } from '@/utils/backgroundImage';
import { isReviewer } from '@/utils/Helpers';

export default function Review() {
  const [perPageCount, setPerPageCount] = useState(10);
  const [selectedPageNumber, setSelectedPageNumber] = useState(0);
  const [approvalStatus, setApprovalStatus] = useState(
    IIASAFieldSurveyEnumReviewStatus.NotReviewed
  );
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!auth.isAuthenticated) {
      auth
        .signinSilent()
        .then((user) => {
          if (user === null) {
            router.push('\\').then();
          }
        })
        .catch(() => {
          router.push('\\').then();
        });
    } else if (!isReviewer(auth)) {
      router.push(`${router.basePath}/user`).then();
    }
  }, []);

  const { queryKey, data } = useGetSurveyReview(
    {
      MaxResultCount: perPageCount,
      SkipCount: perPageCount * selectedPageNumber,
      reviewStatus: approvalStatus,
    },
    { query: { enabled: auth.isAuthenticated } }
  );

  const queryClient = useQueryClient();

  function GetItems() {
    queryClient.invalidateQueries(queryKey).then();
  }
  function pageClick(selectedItem: { selected: number }) {
    const pageNumber = selectedItem.selected; // page number is zero indexed
    setSelectedPageNumber(pageNumber);
    GetItems();
  }

  return (
    <Main
      meta={
        <Meta
          title="Donate Water Surveys"
          description="Review Surveys from Donate water project"
        />
      }
    >
      <div className="relative isolate h-screen">
        {getBackgroundImage()}
        {data !== undefined && (
          <div className="h-auto bg-white/10 backdrop-blur-sm">
            <div className="grid grid-cols-1 bg-black/30 px-12 backdrop-blur-sm md:grid-cols-6 lg:grid-cols-11 lg:pt-24 ">
              <div className="col-span-1 md:col-span-4 lg:col-span-9 ">
                <PageNavigation
                  /* eslint-disable-next-line react/jsx-no-bind */
                  handlePageClick={pageClick}
                  pageCount={
                    (data.totalCount as number) > perPageCount
                      ? Math.ceil((data.totalCount as number) / perPageCount)
                      : 1
                  }
                  key="sdf"
                />
              </div>
              <div className="col-span-1 justify-center text-right align-middle sm:p-4">
                <label
                  htmlFor="pageCount"
                  className="block text-sm font-medium text-white "
                >
                  per page
                </label>
                <div className=" text-right">
                  <select
                    value={perPageCount}
                    onChange={(event) => {
                      const count = parseInt(event.target.value, 10);
                      setPerPageCount(count);
                      GetItems();
                    }}
                    name="pageCount"
                    id="pageCount"
                    className=" mt-1 rounded-md border-gray-300 bg-gray-900 p-2 text-white  shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  >
                    <option>10</option>
                    <option>20</option>
                    <option>50</option>
                    <option>100</option>
                    <option>200</option>
                    <option>500</option>
                  </select>
                </div>
              </div>
              <div className="col-span-1 justify-center text-right align-middle sm:p-4">
                <label
                  htmlFor="pageCount"
                  className="block text-center text-sm font-medium text-white"
                >
                  Filter
                </label>
                <div className="text-center">
                  <select
                    value={approvalStatus}
                    onChange={(event) => {
                      // @ts-ignore
                      setApprovalStatus(event.target.value);
                      GetItems();
                    }}
                    name="pageCount"
                    id="pageCount"
                    className="mt-1  rounded-md border-gray-300 bg-gray-900 p-2 text-white  shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  >
                    <option
                      value={IIASAFieldSurveyEnumReviewStatus.NotReviewed}
                    >
                      {IIASAFieldSurveyEnumReviewStatus.NotReviewed}
                    </option>
                    <option value={IIASAFieldSurveyEnumReviewStatus.Rejected}>
                      {IIASAFieldSurveyEnumReviewStatus.Rejected}
                    </option>
                    <option value={IIASAFieldSurveyEnumReviewStatus.Skipped}>
                      {IIASAFieldSurveyEnumReviewStatus.Skipped}
                    </option>
                    <option value={IIASAFieldSurveyEnumReviewStatus.Completed}>
                      {IIASAFieldSurveyEnumReviewStatus.Completed}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm">
              {data?.items !== undefined && (
                <ReviewListTable
                  data={data?.items as IIASAFieldSurveyDtosReviewDto[]}
                  key="myTable"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </Main>
  );
}
