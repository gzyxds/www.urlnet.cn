// 边框样式参考设计其他都不变

// 功能特色展示组件
function FeaturesSection(): JSX.Element {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            丰厚奖励体系
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            提供开户奖、出货奖、推荐激活奖、月度拉新奖、月度装机奖、付费升级奖、运营中心补贴、管理奖等多维度奖励机制，助力代理商持续发展。
          </p>
        </div>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-4 xl:gap-x-8"
        >
          {featureCards.map((feature) => {
            const IconComponent = feature.icon
            return (
              <li
                key={feature.id}
                className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none"
              >
                <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-transparent p-6">
                  <div className="flex h-12 w-12 flex-none items-center justify-center bg-white border border-gray-200 rounded-md">
                    <IconComponent
                      className="h-6 w-6 text-blue-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-sm leading-6 font-medium text-gray-900">
                    {feature.name}
                  </div>
                </div>

                <div className="px-6 py-4 bg-transparent">
                  <p className="mb-4 text-sm leading-6 text-gray-700">
                    {feature.description}
                  </p>
                  <div className="mb-6 space-y-2">
                    {feature.features.map((featureItem, index) => (
                      <div key={index} className="flex items-start gap-x-2">
                        <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                        <span className="text-sm leading-5 text-gray-600">
                          {featureItem}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* 操作按钮 */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700">
                      立即体验
                    </button>
                    <button className="flex-1 border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-gray-400 hover:text-gray-900">
                      查看详情
                    </button>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>


      </Container>
    </section>
  )
}

// 星驿付产品优势展示组件
function AdvantagesSection(): JSX.Element {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">产品优势</h2>
          <div className="mx-auto mb-4 h-1 w-16 bg-blue-600"></div>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            星驿付POS机，央行支付牌照，安全稳定，费率低至0.38%
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-4 xl:gap-x-8">
          {/* 产品卡片1 - 星驿付POS机 */}
          <div className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none">
            <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-transparent p-6">
              <div className="flex h-12 w-12 flex-none items-center justify-center bg-white border border-gray-200 rounded-md">
                <ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">星驿付POS机</h3>
                <div className="font-medium text-blue-600">央行牌照</div>
              </div>
            </div>

            <div className="px-6 py-4 bg-transparent">
              <p className="mb-4 text-sm leading-6 text-gray-700">
                星驿付拥有央行颁发的支付业务许可证，资金安全有保障，一清结算更放心
              </p>
              <div className="mb-6 space-y-2">
                <div className="flex items-start gap-x-2">
                  <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                  <span className="text-sm leading-5 text-gray-600">
                    央行支付牌照，正规一清机构
                  </span>
                </div>
                <div className="flex items-start gap-x-2">
                  <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                  <span className="text-sm leading-5 text-gray-600">
                    银联官方认证，资金安全有保障
                  </span>
                </div>
                <div className="flex items-start gap-x-2">
                  <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                  <span className="text-sm leading-5 text-gray-600">
                    T+1结算模式，账目清晰可查
                  </span>
                </div>
              </div>

              {/* 操作按钮 */}
              <div className="flex gap-3">
                <button className="flex-1 bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700">
                  立即体验
                </button>
                <button className="flex-1 border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-gray-400 hover:text-gray-900">
                  查看详情
                </button>
              </div>
            </div>
          </div>

          {/* 产品卡片2 - 星驿付官网 */}
          <div className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none">
            <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-transparent p-6">
              <div className="flex h-12 w-12 flex-none items-center justify-center bg-white border border-gray-200 rounded-md">
                <AcademicCapIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">星驿付官网</h3>
                <div className="font-medium text-blue-600">费率优势</div>
              </div>
            </div>

            <div className="px-6 py-4 bg-transparent">
              <p className="mb-4 text-sm leading-6 text-gray-700">
                星驿付POS机费率0.38%起，永不+3，支持多种支付方式，成本低更实惠
              </p>
              <div className="mb-6 space-y-2">
                <div className="flex items-start gap-x-2">
                  <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                  <span className="text-sm leading-5 text-gray-600">
                    费率低至0.38%，行业领先水平
                  </span>
                </div>
                <div className="flex items-start gap-x-2">
                  <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                  <span className="text-sm leading-5 text-gray-600">
                    永不+3，费率稳定透明
                  </span>
                </div>
                <div className="flex items-start gap-x-2">
                  <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                  <span className="text-sm leading-5 text-gray-600">
                    支持多种支付方式，满足不同客户需求
                  </span>
                </div>
              </div>

              {/* 操作按钮 */}
              <div className="flex gap-3">
                <button className="flex-1 bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700">
                  立即体验
                </button>
                <button className="flex-1 border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-gray-400 hover:text-gray-900">
                  查看详情
                </button>
              </div>
            </div>
          </div>

          {/* 产品卡片3 - 星驿付电签POS */}
          <div className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none">
            <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-transparent p-6">
              <div className="flex h-12 w-12 flex-none items-center justify-center bg-white border border-gray-200 rounded-md">
                <FaceSmileIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">星驿付电签POS</h3>
                <div className="font-medium text-blue-600">产品齐全</div>
              </div>
            </div>

            <div className="px-6 py-4 bg-transparent">
              <p className="mb-4 text-sm leading-6 text-gray-700">
                星驿付电签版POS机，体积小巧便于携带，支持电子签名，操作简便更环保
              </p>
              <div className="mb-6 space-y-2">
                <div className="flex items-start gap-x-2">
                  <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                  <span className="text-sm leading-5 text-gray-600">
                    电签功能，无需打印小票
                  </span>
                </div>
                <div className="flex items-start gap-x-2">
                  <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                  <span className="text-sm leading-5 text-gray-600">
                    体积小巧，便于携带
                  </span>
                </div>
                <div className="flex items-start gap-x-2">
                  <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                  <span className="text-sm leading-5 text-gray-600">
                    支持多种支付方式，功能全面
                  </span>
                </div>
              </div>

              {/* 操作按钮 */}
              <div className="flex gap-3">
                <button className="flex-1 bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700">
                  立即体验
                </button>
                <button className="flex-1 border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-gray-400 hover:text-gray-900">
                  查看详情
                </button>
              </div>
            </div>
          </div>

          {/* 产品卡片4 - 星驿付智能POS */}
          <div className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none">
            <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-transparent p-6">
              <div className="flex h-12 w-12 flex-none items-center justify-center bg-white border border-gray-200 rounded-md">
                <CpuChipIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">星驿付智能POS</h3>
                <div className="font-medium text-blue-600">快速办理</div>
              </div>
            </div>

            <div className="px-6 py-4 bg-transparent">
              <p className="mb-4 text-sm leading-6 text-gray-700">
                星驿付智能POS机，功能强大的智能终端，支持收银管理、会员管理、库存管理等
              </p>
              <div className="mb-6 space-y-2">
                <div className="flex items-start gap-x-2">
                  <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                  <span className="text-sm leading-5 text-gray-600">
                    快速办理，当天发货/审核发货
                  </span>
                </div>
                <div className="flex items-start gap-x-2">
                  <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                  <span className="text-sm leading-5 text-gray-600">
                    功能全面，一机多用
                  </span>
                </div>
                <div className="flex items-start gap-x-2">
                  <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                  <span className="text-sm leading-5 text-gray-600">
                    支持会员管理、库存管理等增值服务
                  </span>
                </div>
              </div>

              {/* 操作按钮 */}
              <div className="flex gap-3">
                <button className="flex-1 bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700">
                  立即体验
                </button>
                <button className="flex-1 border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-gray-400 hover:text-gray-900">
                  查看详情
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
