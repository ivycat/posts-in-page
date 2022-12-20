import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {  } from '@wordpress/editor';
import { Fragment, Component  } from '@wordpress/element';
import { PanelBody, PanelRow, SelectControl, ToggleControl, Tooltip, RangeControl, FormToggle, DateTimePicker, RadioControl } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';

//import registerBlockType from wp.blocks;

registerBlockType('posts-in-page-block/post-list-block', {
    title: 'Posts In Page',
    description: 'Block to display post list on page.',
    icon: 'list-view',
    category: 'widgets',
    attributes: {
        postTypes:{
            type: 'array',
        },
        selectedPostType:{
            type: 'string',
            default: 'post'
        },
        taxonomies:{
            type: 'array'
        },
        termsList:{
            type: 'array'
        },
        selectedTaxonomies:{
            type: 'string',
            default: 'all'
        },
        selectedLayout:{
            type: 'string',
            default: 'list'
        },
        selectedTerms:{
            type: 'array',
            default: ''
        },
        postsPerPage: {
            type: 'string'
        },
        showContent: {
            type: 'boolean',
            default: true
        },
        showExcerpt: {
            type: 'boolean',
            default: false
        },
        showFeaturedImage: {
            type: 'boolean',
            default: true
        },
        showPagination: {
            type: 'boolean',
            default: true
        },
        nextText:{
            type: 'string',
            default: 'Next'
        },
        previousText:{
            type: 'string',
            default: 'Previous'
        },
        order: {
            type: 'string'
        },
        orderBy:{
            type: 'string',
            default: 'date'
        },
        excludePost:{
            type: 'string',
        },
        includePost:{
            type: 'string',
        },
        offset:{
            type: 'number',
            default: 0
        },
        ignoreStickyPosts: {
            type: 'boolean',
            default: true
        },
        noPostFoundText:{
            type: 'string',
            default: 'No Posts Found...!'
        },
        startDate:{
            type: 'string',
        },
        endDate: {
            type: 'string',
        },
        showPostDates: {
            type: 'boolean',
            default: false
        },
        showBeforeToday: {
            type: 'boolean',
            default: false
        },
        beforeTodayCount:{
            type: 'number',
            default: 1
        },
        beforeTodayPeriod:{
            type: 'string',
            default: 'today'
        },
    },
    edit: class extends Component {
        //standard constructor for a component
        constructor() {
            super(...arguments);

            this.state = { postTypesState: this.props.attributes.postTypes };

            this.onChangeContent = this.onChangeContent.bind(this);
            this.onChangeTaxonomy = this.onChangeTaxonomy.bind(this);
            this.onChangeTerm = this.onChangeTerm.bind(this);
            this.onChangeLayout = this.onChangeLayout.bind(this);
            this.updatePostsPerPage = this.updatePostsPerPage.bind(this);
            this.updateEnableContent = this.updateEnableContent.bind(this);
            this.updateEnableExcerpt = this.updateEnableExcerpt.bind(this);
            this.updateEnableFeaturedImage = this.updateEnableFeaturedImage.bind(this);
            this.updatePagination = this.updatePagination.bind(this);
            this.onOrderChange = this.onOrderChange.bind(this); 
            this.onOrderByChange = this.onOrderByChange.bind(this);
            this.onChangeExcludePost = this.onChangeExcludePost.bind(this);
            this.onChangeIncludePost = this.onChangeIncludePost.bind(this);
            this.onChangeOffset = this.onChangeOffset.bind(this);
            this.updateNextText = this.updateNextText.bind(this);
            this.updatePreviousText = this.updatePreviousText.bind(this);
            this.updateNoPostFoundText = this.updateNoPostFoundText.bind(this);
            this.updateStartDate = this.updateStartDate.bind(this);
            this.updateEndDate = this.updateEndDate.bind(this);
            this.updateShowPostDates = this.updateShowPostDates.bind(this);
            this.updateShowBeforeToday = this.updateShowBeforeToday.bind(this);
            this.onChangeBeforeTodayCount = this.onChangeBeforeTodayCount.bind(this);
            this.onChangeBeforeTodayPeriod = this.onChangeBeforeTodayPeriod.bind(this);
            this.updateIgnoreStickyPosts = this.updateIgnoreStickyPosts.bind(this);
        }
        componentDidMount() {
            if( !general.show_date_settings ){
                this.props.setAttributes({ startDate : '' });
                this.props.setAttributes({ endDate : '' });
                this.props.setAttributes({ showPostDates : false });
                this.props.setAttributes({ showBeforeToday : false });
                this.props.setAttributes({ beforeTodayCount : '1' });
                this.props.setAttributes({ beforeTodayPeriod : 'today' });
                console.log('testttttt');
            }
            //console.log('test-'+general.show_date_settings);
            let posttypeOptions = [];
            wp.apiFetch( { path: '/wp/v2/types' } )
            .then( posttypes => {
                for (let [key, item] of Object.entries(posttypes)) {
                    posttypeOptions.push({
                        value: item.slug,
                        label: item.name
                    });
                }
                //this.props.setAttributes({ postTypes: posttypeOptions });
                this.setState({ postTypesState: posttypeOptions });
            });
            this.props.setAttributes({ postTypes: posttypeOptions })
            wp.apiFetch( { path: '/wp/v2/taxonomies?type='+ this.props.attributes.selectedPostType } )
            .then(taxonomies => 
                this.props.setAttributes({ taxonomies: taxonomies })
            );
        }

        onChangeContent(selectedPostType) {
            let newTaxonomis = "";
            wp.apiFetch( { path: '/wp/v2/taxonomies?type='+ selectedPostType } )
            .then(taxonomies => {
                this.props.setAttributes({ taxonomies: taxonomies });
                this.props.setAttributes({ selectedPostType: selectedPostType });
                this.props.setAttributes({ selectedTaxonomies: 'all' });
                this.props.setAttributes({ selectedTerms: '' });
            });
            // console.log(newTaxonomis);
            // this.props.setAttributes({ selectedPostType: selectedPostType });
            // this.props.setAttributes({ selectedTaxonomies: 'all' });
            // this.props.setAttributes({ selectedTerms: '' });
        }
        onChangeTaxonomy(selectedTaxonomies) {
            this.props.setAttributes({ selectedTaxonomies: selectedTaxonomies });
            wp.apiFetch( { path: '/wp/v2/all-terms?term='+ selectedTaxonomies } )
            .then(terms => {
                    this.props.setAttributes({ termsList: terms });
                    this.props.setAttributes({ selectedTerms: '' });
                }
            );
            //this.props.setAttributes({ selectedTerms: '' });
        }
        onChangeTerm(selectedTerms) {
            this.props.setAttributes({ selectedTerms: selectedTerms });
        }
        onChangeLayout( selectedLayout ){
            this.props.setAttributes({ selectedLayout: selectedLayout });
            if( selectedLayout == 'card' ){
                this.props.setAttributes({ showExcerpt: true });
                this.props.setAttributes({ showContent: false });
            }
        }
        updatePostsPerPage(e) {
            this.props.setAttributes({ postsPerPage: e.target.value });
        }
        updateEnableContent(){
            if(this.props.attributes.showContent == false){
                if(this.props.attributes.showExcerpt == true){
                    this.props.setAttributes({ showExcerpt: false });
                }
            }
            this.props.setAttributes({ showContent: !this.props.attributes.showContent });
        }
        updateEnableExcerpt(){
            if(this.props.attributes.showExcerpt == false){
                if(this.props.attributes.showContent == true){
                    this.props.setAttributes({ showContent: false });
                }
            }
            this.props.setAttributes({ showExcerpt: !this.props.attributes.showExcerpt });
        }
        updateEnableFeaturedImage(){
            this.props.setAttributes({ showFeaturedImage: !this.props.attributes.showFeaturedImage });
        }
        updatePagination(){
            this.props.setAttributes({ showPagination: !this.props.attributes.showPagination });
        }
        updateNextText(e){
            this.props.setAttributes({ nextText : e.target.value });
        }
        updatePreviousText(e){
            this.props.setAttributes({ previousText : e.target.value });
        }
        onOrderChange(e){
            this.props.setAttributes({ order : e.target.value });
        }
        onOrderByChange(e){
            this.props.setAttributes({ orderBy : e.target.value });
        }
        onChangeExcludePost ( e ){
            this.props.setAttributes({ excludePost : e.target.value });
        }
        onChangeIncludePost ( e ){
            this.props.setAttributes({ includePost : e.target.value });
        }
        onChangeOffset ( offset ){
            this.props.setAttributes({ offset : offset });
        }
        updateIgnoreStickyPosts(){
            this.props.setAttributes({ ignoreStickyPosts: !this.props.attributes.ignoreStickyPosts });
        }
        updateNoPostFoundText(e){
            this.props.setAttributes({ noPostFoundText : e.target.value });
        }
        updateStartDate( newStartDate ){
            this.props.setAttributes({ startDate : newStartDate });
        }
        updateEndDate( newEndDate ){
            this.props.setAttributes({ endDate : newEndDate });
        }
        updateShowPostDates(){
            if(this.props.attributes.showPostDates == false){
                if(this.props.attributes.showBeforeToday == true){
                    this.props.setAttributes({ showBeforeToday: false });
                }
            }
            this.props.setAttributes({ showPostDates: !this.props.attributes.showPostDates });
        }
        updateShowBeforeToday(){
            if(this.props.attributes.showBeforeToday == false){
                if(this.props.attributes.showPostDates == true){
                    this.props.setAttributes({ showPostDates: false });
                }
            }
            this.props.setAttributes({ showBeforeToday: !this.props.attributes.showBeforeToday });
        }
        onChangeBeforeTodayCount ( beforeTodayCount ){
            this.props.setAttributes({ beforeTodayCount : beforeTodayCount });
        }
        onChangeBeforeTodayPeriod(e){
            this.props.setAttributes({ beforeTodayPeriod : e.target.value });
        }

        render() {
            const { postTypesState } = this.state;
            const { attributes } = this.props;
            const {postTypes, selectedPostType, taxonomies, selectedTaxonomies, selectedLayout, selectedTerms, postsPerPage, showContent, showExcerpt, showFeaturedImage, showPagination, nextText, previousText, order, orderBy, excludePost, includePost, offset, ignoreStickyPosts, termsList, noPostFoundText, showPostDates, startDate, endDate, showBeforeToday, beforeTodayCount, beforeTodayPeriod} = attributes;
            if(postTypes){
                var postTypeArray = Object.values(postTypes);  
            }
            if(postTypesState){
                var postTypeArrayState = Object.values(postTypesState);  
            }
    
            let uniqueTaxonomyValues = [];
            if(taxonomies){
                var taxonomiesArray = Object.values(taxonomies);  
                uniqueTaxonomyValues.push({value: 'all', label: '-- Select --'});
                taxonomiesArray.map((item, index) => {
                    uniqueTaxonomyValues.push({value: item.slug, label: item.name});
                });
            }

            let uniqueTermValues = [];
            if(termsList){
                var termsListArray = Object.values(termsList);  
                //uniqueTermValues.push({value: '', label: '-- Select --'});
                termsListArray.map((item, index) => {
                    uniqueTermValues.push({value: item.slug, label: item.name});
                });
            }

            let labelText = '';
            if( beforeTodayPeriod == 'today'){
                labelText = 'Display posts published on '+beforeTodayCount+' '+' day(s) before today.';
            } else {
               labelText = 'Display posts published on '+beforeTodayCount+' '+beforeTodayPeriod+'(s) before today.';
            }

            return ([
                <InspectorControls className="test-test-test">
                   <PanelBody title={'Post Type and Taxonomy Settings'} >
                        <PanelRow>
                            <SelectControl
                                label="Select PostType"
                                value={selectedPostType}
                                options= {postTypeArrayState}
                                onChange={this.onChangeContent}
                            />
                        </PanelRow>
                        <PanelRow>
                            <SelectControl
                                label="Select Taxonomy"
                                value={selectedTaxonomies}
                                options={uniqueTaxonomyValues}
                                onChange={this.onChangeTaxonomy}
                            />
                        </PanelRow>
                        { 'all' != selectedTaxonomies && <PanelRow>
                            <SelectControl
                                className="pip-select-term"
                                label="Select Term"
                                multiple
                                value={selectedTerms}
                                options={uniqueTermValues}
                                onChange={this.onChangeTerm}
                            />
                        </PanelRow>}
                    </PanelBody>

                    <PanelBody title={'Layout Settings'} >
                        <RadioControl
                            label="Select Template Layout"
                            help="Select listing style template."
                            className="layout-settings"
                            selected={selectedLayout}
                            options={ [
                                { label: 'List', value: 'list' },
                                { label: 'Card', value: 'card' },
                            ] }
                            onChange={this.onChangeLayout}
                        />
                    </PanelBody>
                    
                    <PanelBody title={'General Settings'} initialOpen={ false }>
                        <PanelRow>
                            <label>Number of Posts per Page</label>
                            <input 
                                type="number" 
                                onChange={ this.updatePostsPerPage } 
                                value={ postsPerPage }
                            />
                        </PanelRow>
                        <PanelRow>
                            <label>Order</label>
                            <select onChange={ this.onOrderChange } value={ order }>
                                <option value='DESC'>Descending</option>
                                <option value='ASC'>Ascending</option>
                            </select>
                        </PanelRow>
                        <PanelRow>
                            <label>Order By</label>
                            <select onChange={ this.onOrderByChange } value={ orderBy }>
                                <option value='ID'>ID</option>
                                <option value='title'>Title</option>
                                <option value='date'>Date</option>
                                <option value='author'>Author</option>
                                <option value='menu_order'>Menu Order</option>
                            </select>
                        </PanelRow>
                        <PanelRow>
                            <div>
                                <label>Exclude Posts (Use Post IDS)</label>
                                <input type="text" onChange={ this.onChangeExcludePost } value={ excludePost }/>
                            </div>
                        </PanelRow>
                        <PanelRow>
                            <div>
                                <label>Include Posts (Use Post IDS)</label>
                                <input type="text" onChange={ this.onChangeIncludePost } value={ includePost } />
                            </div>
                        </PanelRow>
                        { postsPerPage > 0  && <PanelRow>
                            <RangeControl
                                label="Offset (Skip number of posts)"
                                value={ offset }
                                onChange={ this.onChangeOffset }
                                min={ 0 }
                                max={ 50 }
                                step={ 1 }
                            />
                        </PanelRow>}
                        <PanelRow>
                            <label>Ignore sticky posts</label>
                            <FormToggle
                                checked={ ignoreStickyPosts }
                                onChange={ this.updateIgnoreStickyPosts } 
                            />
                        </PanelRow>
                        <PanelRow>
                            <div>
                                <label>No Posts Found Text</label>
                                <input 
                                    type="text" 
                                    onChange={ this.updateNoPostFoundText } 
                                    value={ noPostFoundText }
                                />
                            </div>
                        </PanelRow>
                    </PanelBody>
                    <PanelBody title={'Content Display Settings'} initialOpen={ false }>
                        { selectedLayout!='card' && <PanelRow>
                            <label>Show Content</label>
                            <FormToggle
                                checked={ showContent }
                                onChange={ this.updateEnableContent } 
                            />
                        </PanelRow>
                        }
                        <PanelRow>
                            <label>Show Excerpt</label>
                            <FormToggle
                                checked={ showExcerpt }
                                onChange={ this.updateEnableExcerpt } 
                            />
                        </PanelRow>
                        <PanelRow>
                            <label>Display Featured Image</label>
                            <FormToggle
                                checked={ showFeaturedImage }
                                onChange={ this.updateEnableFeaturedImage } 
                            />
                        </PanelRow>
                    </PanelBody>
                    <PanelBody title={'Pagination Settings'} initialOpen={ false }>
                        <PanelRow>
                            <label>Show Pagination</label>
                            <FormToggle
                                checked={ showPagination }
                                onChange={ this.updatePagination } 
                            />
                        </PanelRow>
                        { showPagination && <PanelRow>
                            <div>
                                <label>Pagination Next Label</label>
                                <input 
                                    type="text" 
                                    onChange={ this.updateNextText } 
                                    value={ nextText }
                                />
                            </div>
                        </PanelRow>}
                        {showPagination && <PanelRow>
                            <div>
                                <label>Pagination Previous Label</label>
                                <input 
                                    type="text" 
                                    onChange={ this.updatePreviousText } 
                                    value={ previousText }
                                />
                            </div>
                        </PanelRow>}
                    </PanelBody>
                    {general.show_date_settings && <PanelBody title={'Date Settings'} initialOpen={ false }>
                        <PanelRow>
                            <label>Show Posts within specific dates</label>
                        </PanelRow>
                        <PanelRow>
                            <FormToggle
                                checked={ showPostDates }
                                onChange={ this.updateShowPostDates } 
                            />
                        </PanelRow>
                        {showPostDates && <PanelRow>
                            <div>
                                <label>Post start date</label>
                                <DateTimePicker
                                    currentDate={ startDate }
                                    onChange={ this.updateStartDate }
                                    is12Hour={ true }
                                />
                            </div>
                        </PanelRow>}
                        {showPostDates && <PanelRow>
                            <div>
                                <label>Post end date</label>
                                <DateTimePicker
                                    currentDate={ endDate }
                                    onChange={ this.updateEndDate }
                                    is12Hour={ true }
                                />
                            </div>
                        </PanelRow>}
                        <PanelRow>
                            <label>Choose the relative date of included posts.</label>
                        </PanelRow>
                        <PanelRow>
                            <FormToggle
                                checked={ showBeforeToday }
                                onChange={ this.updateShowBeforeToday } 
                            />
                        </PanelRow>
                        {showBeforeToday && <PanelRow>
                            <select onChange={ this.onChangeBeforeTodayPeriod } value={ beforeTodayPeriod }>
                                <option value='today'>Today</option>
                                <option value='week'>Week</option>
                                <option value='month'>Month</option>
                                <option value='year'>Year</option>
                            </select>
                        </PanelRow>}
                        {showBeforeToday && <PanelRow>
                                <RangeControl
                                    label="minus"
                                    value={ beforeTodayCount }
                                    onChange={ this.onChangeBeforeTodayCount }
                                    min={ 1 }
                                    max={ 12 }
                                    step={ 1 }
                                />
                        </PanelRow>}
                        {showBeforeToday && <PanelRow>
                            <label className="CustomDateText">{labelText}</label>
                        </PanelRow>}
                    </PanelBody>
                    }
                </InspectorControls>,
                <Fragment>
                    <ServerSideRender 
                        block="posts-in-page-block/post-list-block" 
                        attributes={ 
                            {selectedPostType, selectedTaxonomies, selectedLayout, selectedTerms, postsPerPage, showContent, showExcerpt, showFeaturedImage, showPagination, nextText, previousText, order, orderBy, excludePost, includePost, offset, ignoreStickyPosts, noPostFoundText, showPostDates, startDate, endDate, showBeforeToday, beforeTodayCount, beforeTodayPeriod } 
                        } 
                    />
                </Fragment>
            ]);
        }
    },

    save: function (props) {
        return null;
    },
})